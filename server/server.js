import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin';

// Directories
const DATA_FILE = path.join(__dirname, 'data', 'projects.json');
const INQUIRIES_FILE = path.join(__dirname, 'data', 'inquiries.json');
const UPLOADS_DIR = path.join(__dirname, 'uploads');

// Ensure uploads folder exists
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Multer config for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, 'poster-' + uniqueSuffix + ext);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 }, // 15MB max file
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Middleware
app.use(cors());
app.use(express.json({ limit: '20mb' }));
app.use('/uploads', express.static(UPLOADS_DIR));

// Helper: read projects
function getProjects() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      return [];
    }
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading projects.json:', err);
    return [];
  }
}

// Helper: save projects
function saveProjects(projects) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(projects, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing projects.json:', err);
    return false;
  }
}

// Helper: read inquiries
function getInquiries() {
  try {
    if (!fs.existsSync(INQUIRIES_FILE)) {
      return [];
    }
    const data = fs.readFileSync(INQUIRIES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading inquiries.json:', err);
    return [];
  }
}

// Helper: save inquiries
function saveInquiries(inquiries) {
  try {
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing inquiries.json:', err);
    return false;
  }
}

// Auth Middleware
function requireAdmin(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: 'Unauthorized: Missing admin token' });
  }

  // Token format: "Bearer studio-admin-token-2026"
  const token = authHeader.replace('Bearer ', '').trim();
  if (token === 'studio-admin-token-2026') {
    return next();
  }
  return res.status(403).json({ error: 'Forbidden: Invalid admin token' });
}

// =================== ROUTES =================== //

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Pankaj Regar Portfolio CMS API', timestamp: new Date() });
});

// 1. Get all projects (Public)
app.get('/api/projects', (req, res) => {
  const projects = getProjects();
  res.json(projects);
});

// 2. Admin Login
app.post('/api/auth/login', (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD || password === 'admin2026') {
    return res.json({
      success: true,
      token: 'studio-admin-token-2026',
      message: 'Authentication successful',
    });
  }
  return res.status(401).json({ success: false, message: 'Invalid admin password' });
});

// 3. Add Project (Admin)
app.post('/api/projects', requireAdmin, (req, res) => {
  const newProject = req.body;
  if (!newProject.title) {
    return res.status(400).json({ error: 'Project title is required' });
  }

  const projects = getProjects();
  const id = newProject.id || `proj-${Date.now()}`;
  const projectWithId = {
    ...newProject,
    id,
    year: newProject.year || new Date().getFullYear().toString(),
  };

  projects.unshift(projectWithId);
  saveProjects(projects);

  res.status(201).json(projectWithId);
});

// 4. Update Project (Admin)
app.put('/api/projects/:id', requireAdmin, (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  const projects = getProjects();
  const index = projects.findIndex((p) => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Project not found' });
  }

  projects[index] = { ...projects[index], ...updateData };
  saveProjects(projects);

  res.json(projects[index]);
});

// 5. Delete Project (Admin)
app.delete('/api/projects/:id', requireAdmin, (req, res) => {
  const { id } = req.params;
  let projects = getProjects();
  const initialLength = projects.length;

  projects = projects.filter((p) => p.id !== id);

  if (projects.length === initialLength) {
    return res.status(404).json({ error: 'Project not found' });
  }

  saveProjects(projects);
  res.json({ success: true, message: 'Project deleted' });
});

// 6. Upload Image File (Admin)
app.post('/api/upload', requireAdmin, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file uploaded' });
  }

  // File URL
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({
    success: true,
    url: fileUrl,
    filename: req.file.filename,
  });
});

// =================== INQUIRIES ROUTES =================== //

// 7. Submit Inquiry (Public: Anyone from Contact form)
app.post('/api/inquiries', (req, res) => {
  const { name, email, projectType, budget, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const inquiries = getInquiries();
  const newInquiry = {
    id: `inq-${Date.now()}`,
    name: name.trim(),
    email: email.trim(),
    projectType: projectType || 'Commercial / Brand Film',
    budget: budget || 'Not specified',
    message: message.trim(),
    status: 'unread',
    createdAt: new Date().toISOString(),
  };

  inquiries.unshift(newInquiry);
  saveInquiries(inquiries);

  console.log(`📬 New client inquiry from ${name} (${email}) for [${projectType}]`);
  res.status(201).json({ success: true, message: 'Inquiry delivered to studio console', inquiry: newInquiry });
});

// 8. Get All Inquiries (Admin)
app.get('/api/inquiries', requireAdmin, (req, res) => {
  const inquiries = getInquiries();
  res.json(inquiries);
});

// 9. Toggle Read/Unread (Admin)
app.patch('/api/inquiries/:id/read', requireAdmin, (req, res) => {
  const { id } = req.params;
  const inquiries = getInquiries();
  const item = inquiries.find((i) => i.id === id);

  if (!item) {
    return res.status(404).json({ error: 'Inquiry not found' });
  }

  item.status = item.status === 'read' ? 'unread' : 'read';
  saveInquiries(inquiries);
  res.json({ success: true, inquiry: item });
});

// 10. Delete Inquiry (Admin)
app.delete('/api/inquiries/:id', requireAdmin, (req, res) => {
  const { id } = req.params;
  let inquiries = getInquiries();
  const initialLength = inquiries.length;

  inquiries = inquiries.filter((i) => i.id !== id);

  if (inquiries.length === initialLength) {
    return res.status(404).json({ error: 'Inquiry not found' });
  }

  saveInquiries(inquiries);
  res.json({ success: true, message: 'Inquiry deleted' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🎬 Portfolio CMS Server running on http://localhost:${PORT}`);
});
