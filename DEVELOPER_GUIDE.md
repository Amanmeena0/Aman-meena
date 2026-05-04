# Developer Quick Reference Guide

## 🚀 Quick Start

### Understanding the Structure
```
src/
├── components/      ← React components (UI only)
├── hooks/          ← Custom hooks (state + logic)
├── services/       ← API calls & business logic
├── data/           ← Constants & type definitions
├── lib/            ← Utilities
└── App.tsx         ← Main orchestrator
```

---

## 📁 Where to Add Things

### Adding a New Page Section?
**Create:** `src/components/Sections/[FeatureName]Section.tsx`
**Example:**
```tsx
// src/components/Sections/BlogSection.tsx
import { motion } from 'motion/react';

export function BlogSection() {
  return (
    <section id="blog" className="py-32">
      {/* Your content */}
    </section>
  );
}
```
**Then import in App.tsx:**
```tsx
import { BlogSection } from "@/src/components/Sections/BlogSection";

export default function App() {
  return (
    <>
      <HeroSection />
      <BlogSection />  {/* ← Add here */}
    </>
  );
}
```

### Adding Reusable Component?
**Create:** `src/components/[FeatureName]/[ComponentName].tsx`
**Example:**
```tsx
// src/components/Blog/BlogCard.tsx
export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="p-6 rounded-lg border">
      <h3>{blog.title}</h3>
      <p>{blog.excerpt}</p>
    </div>
  );
}
```

### Adding State/Logic?
**Create:** `src/hooks/use[FeatureName].ts`
**Example:**
```tsx
// src/hooks/useBlogFilter.ts
import { useState } from 'react';

export function useBlogFilter(blogs: Blog[]) {
  const [selectedTag, setSelectedTag] = useState('');
  
  const filtered = blogs.filter(b => 
    !selectedTag || b.tags.includes(selectedTag)
  );
  
  return { filtered, selectedTag, setSelectedTag };
}
```
**Use in component:**
```tsx
import { useBlogFilter } from '@/src/hooks/useBlogFilter';

export function BlogSection() {
  const { filtered, selectedTag, setSelectedTag } = useBlogFilter(BLOGS);
  return (
    <>
      {filtered.map(blog => <BlogCard key={...} blog={blog} />)}
    </>
  );
}
```

### Adding API Integration?
**Create:** `src/services/[serviceName].ts`
**Example:**
```tsx
// src/services/blogService.ts
export async function fetchBlogs(): Promise<Blog[]> {
  const response = await fetch('/api/blogs');
  return response.json();
}

export async function createBlog(blog: NewBlog): Promise<Blog> {
  const response = await fetch('/api/blogs', {
    method: 'POST',
    body: JSON.stringify(blog)
  });
  return response.json();
}
```
**Use in hook:**
```tsx
import { fetchBlogs } from '@/src/services/blogService';

export function useBlogData() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchBlogs().then(setBlogs).finally(() => setLoading(false));
  }, []);
  
  return { blogs, loading };
}
```

### Adding Data/Types?
**Update:** `src/data/types.ts` → Add interface
**Create:** `src/data/[featureName].ts` → Add constants
**Example:**
```tsx
// src/data/types.ts - Add this
export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  tags: string[];
  date: string;
}

// src/data/blogs.ts - Create this
import { Blog } from './types';

export const BLOGS: Blog[] = [
  {
    id: '1',
    title: 'React Best Practices',
    excerpt: 'Learn how to write maintainable React code',
    tags: ['React', 'JavaScript'],
    date: '2024-01-15'
  }
];
```

---

## 🔧 Common Tasks

### Import Something
```tsx
// From data
import { PROJECTS } from '@/src/data/projects';
import { Project } from '@/src/data/types';

// From components
import { ProjectCard } from '@/src/components/Projects/ProjectCard';

// From hooks
import { useGreeting } from '@/src/hooks/useGreeting';

// From services
import { generateAIResponse } from '@/src/services/geminiService';

// From utils
import { cn } from '@/src/lib/utils';
```

### Create a Hook with Data
```tsx
// src/hooks/useProjects.ts
import { useState, useEffect } from 'react';
import { PROJECTS } from '@/src/data/projects';

export function useProjects() {
  const [projects, setProjects] = useState(PROJECTS);
  const [selectedTag, setSelectedTag] = useState('');
  
  const filtered = !selectedTag 
    ? projects
    : projects.filter(p => p.tags.includes(selectedTag));
  
  return { filtered, selectedTag, setSelectedTag };
}
```

### Create a Component Using Hook
```tsx
// src/components/Sections/MySection.tsx
import { useProjects } from '@/src/hooks/useProjects';
import { ProjectCard } from '@/src/components/Projects/ProjectCard';

export function MySection() {
  const { filtered, selectedTag, setSelectedTag } = useProjects();
  
  return (
    <section>
      <div className="flex gap-2 mb-8">
        {['All', 'React', 'Python'].map(tag => (
          <button 
            key={tag}
            onClick={() => setSelectedTag(tag === 'All' ? '' : tag)}
            className={selectedTag === tag ? 'active' : ''}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-4">
        {filtered.map((proj, i) => (
          <ProjectCard key={i} project={proj} index={i} />
        ))}
      </div>
    </section>
  );
}
```

---

## 📋 File Naming Conventions

```
✅ DO:
- components/    [PascalCase]/ → [PascalCase].tsx
- hooks/         use[PascalCase].ts
- services/      [camelCase]Service.ts
- data/          [camelCase].ts
- types/         types.ts

❌ DON'T:
- components/my-component.tsx (use MyComponent.tsx)
- hooks/myHook.ts (use useMyHook.ts)
- services/myservice.ts (use myService.ts)
```

---

## 🧪 Testing

### Testing a Component
```tsx
// src/components/Projects/ProjectCard.test.tsx
import { ProjectCard } from './ProjectCard';

describe('ProjectCard', () => {
  it('renders project title', () => {
    const project = {
      title: 'Test Project',
      description: 'Test',
      why: 'Test',
      tags: [],
      link: '#',
      image: 'https://...'
    };
    
    render(<ProjectCard project={project} index={0} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });
});
```

### Testing a Hook
```tsx
// src/hooks/useGreeting.test.ts
import { renderHook } from '@testing-library/react';
import { useGreeting } from './useGreeting';

describe('useGreeting', () => {
  it('returns correct greeting based on time', () => {
    const { result } = renderHook(() => useGreeting());
    expect(['Good morning', 'Good afternoon', 'Good evening']).toContain(result.current);
  });
});
```

### Testing a Service
```tsx
// src/services/geminiService.test.ts
import { generateAIResponse } from './geminiService';

describe('generateAIResponse', () => {
  it('returns string response', async () => {
    const response = await generateAIResponse('Hello');
    expect(typeof response).toBe('string');
  });
});
```

---

## 🎨 Component Template

```tsx
// src/components/Example/Example.tsx
import { motion } from 'motion/react';
import { SomeIcon } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface ExampleProps {
  title: string;
  children?: React.ReactNode;
}

export function Example({ title, children }: ExampleProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={cn(
        'p-6 rounded-lg border',
        'bg-white shadow-sm'
      )}
    >
      <h3 className="text-lg font-serif">{title}</h3>
      {children}
    </motion.div>
  );
}
```

---

## 🪝 Hook Template

```tsx
// src/hooks/useExample.ts
import { useState, useEffect } from 'react';

export function useExample(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Side effects here
  }, [value]);

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return { value, loading, handleChange };
}
```

---

## 🔌 Service Template

```tsx
// src/services/exampleService.ts
export interface ServiceResponse {
  status: 'success' | 'error';
  data?: unknown;
  error?: string;
}

export async function serviceFunction(param: string): Promise<ServiceResponse> {
  try {
    const response = await fetch(`/api/endpoint/${param}`);
    const data = await response.json();
    return { status: 'success', data };
  } catch (error) {
    return { 
      status: 'error', 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}
```

---

## 🚨 Common Issues

### Import Not Found?
```tsx
// ❌ Wrong
import { Component } from './components/Component';

// ✅ Correct
import { Component } from '@/src/components/Section/Component';
```

### Type Not Found?
```tsx
// ❌ Wrong - Type not imported
const project: Project = { ... };

// ✅ Correct - Import from types
import { Project } from '@/src/data/types';

const project: Project = { ... };
```

### Hook Not Updating Component?
```tsx
// ✅ Make sure to use the returned values
const { value, setValue } = useExample('initial');

// Use in JSX
<input value={value} onChange={e => setValue(e.target.value)} />
```

---

## 📚 Useful Commands

```bash
# Type check
npm run lint

# Build for production
npm run build

# Development server
npm run dev

# Clean dist folder
npm run clean
```

---

## 💡 Best Practices

1. **Keep components small** (50-150 lines max)
2. **Extract logic to hooks** (don't put in components)
3. **Separate API calls to services** (easy to mock/test)
4. **Use data files for constants** (easy to manage)
5. **Type everything** (use TypeScript fully)
6. **Test components independently** (one job each)
7. **Use descriptive names** (clear intent)
8. **Keep import paths clean** (use @/src/ alias)

---

## 📞 Need Help?

Check these files:
- `REFACTORING_DOCUMENTATION.md` - Full architecture guide
- `BEFORE_AFTER_COMPARISON.md` - Visual comparison
- Component examples in `src/components/`
