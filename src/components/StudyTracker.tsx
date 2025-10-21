import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Plus, Edit, Trash2, Calendar as CalendarIcon, ChevronDown, ChevronUp, Link, CheckCircle2, Clock, BookOpen, AlertTriangle, Archive, X, Filter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useSpacedRepetition } from "./SpacedRepetitionContext";
import { toast } from "sonner@2.0.3";

interface SpacedRepetition {
  completed: boolean;
  date: Date;
  status: "completed" | "upcoming" | "scheduled";
}

interface Resource {
  name: string;
  url: string;
}

interface StudySession {
  id: number;
  taskName: string;
  subject: string;
  date: Date;
  spacedRepEnabled: boolean;
  spacedRepetitions: SpacedRepetition[];
  synced: boolean;
  resources: Resource[];
  notes: string;
}

export function StudyTracker() {
  const { numRepetitions, dayGaps } = useSpacedRepetition();
  const [sessions, setSessions] = useState<StudySession[]>([
    {
      id: 1,
      taskName: "Neural Networks - Backpropagation",
      subject: "Artificial Intelligence",
      date: new Date(2025, 9, 20),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: true, date: new Date(2025, 9, 21), status: "completed" },
        { completed: true, date: new Date(2025, 9, 23), status: "completed" },
        { completed: false, date: new Date(2025, 9, 27), status: "upcoming" },
        { completed: false, date: new Date(2025, 10, 3), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 20), status: "scheduled" },
      ],
      synced: false,
      resources: [
        { name: "Lecture 5 Recording", url: "https://example.com/lecture5" },
        { name: "GoodNotes - Page 45", url: "https://example.com/goodnotes" },
        { name: "Textbook Chapter 7", url: "https://example.com/textbook" },
      ],
      notes: "Key concept: gradient descent updates weights. Remember chain rule for backpropagation. Practice calculating derivatives for simple networks.",
    },
    {
      id: 2,
      taskName: "Quantum Mechanics - Wave Functions",
      subject: "Physics",
      date: new Date(2025, 9, 21),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: true, date: new Date(2025, 9, 22), status: "completed" },
        { completed: true, date: new Date(2025, 9, 24), status: "completed" },
        { completed: true, date: new Date(2025, 9, 27), status: "completed" },
        { completed: false, date: new Date(2025, 10, 1), status: "upcoming" },
        { completed: false, date: new Date(2025, 10, 8), status: "scheduled" },
      ],
      synced: false,
      resources: [
        { name: "Problem Set 3", url: "https://example.com/problemset3" },
        { name: "Lecture Notes", url: "https://example.com/notes" },
      ],
      notes: "Review Schrödinger equation and normalize wave functions. Focus on boundary conditions.",
    },
    {
      id: 3,
      taskName: "Organic Chemistry - Reaction Mechanisms",
      subject: "Chemistry",
      date: new Date(2025, 9, 20),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 21), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 23), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 27), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 3), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 20), status: "scheduled" },
      ],
      synced: false,
      resources: [
        { name: "Organic Chem Textbook", url: "https://example.com/orgchem" },
      ],
      notes: "SN1 vs SN2 reactions - nucleophile strength matters. Review carbocation stability.",
    },
    {
      id: 4,
      taskName: "Data Structures - Binary Trees",
      subject: "Computer Science",
      date: new Date(2025, 9, 19),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 20), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 22), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 26), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 2), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 19), status: "scheduled" },
      ],
      synced: false,
      resources: [],
      notes: "Tree traversal: inorder, preorder, postorder. Practice on LeetCode.",
    },
    {
      id: 5,
      taskName: "Calculus - Integration Techniques",
      subject: "Mathematics",
      date: new Date(2025, 9, 18),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 19), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 21), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 25), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 1), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 18), status: "scheduled" },
      ],
      synced: false,
      resources: [
        { name: "Khan Academy", url: "https://example.com/khan" },
      ],
      notes: "u-substitution, integration by parts, partial fractions.",
    },
    {
      id: 6,
      taskName: "Microeconomics - Supply and Demand",
      subject: "Economics",
      date: new Date(2025, 9, 17),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 18), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 20), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 24), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 30), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 17), status: "scheduled" },
      ],
      synced: false,
      resources: [],
      notes: "Elasticity, consumer surplus, producer surplus. Graph practice needed.",
    },
    {
      id: 7,
      taskName: "World History - French Revolution",
      subject: "History",
      date: new Date(2025, 9, 16),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 17), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 19), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 23), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 29), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 16), status: "scheduled" },
      ],
      synced: false,
      resources: [
        { name: "Documentary Link", url: "https://example.com/history" },
      ],
      notes: "Key dates: 1789-1799. Estates-General, Tennis Court Oath, Reign of Terror.",
    },
    {
      id: 8,
      taskName: "Cell Biology - Mitosis and Meiosis",
      subject: "Biology",
      date: new Date(2025, 9, 15),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 16), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 18), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 22), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 28), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 15), status: "scheduled" },
      ],
      synced: false,
      resources: [],
      notes: "Prophase, metaphase, anaphase, telophase. Compare mitosis vs meiosis.",
    },
    {
      id: 9,
      taskName: "Statistics - Hypothesis Testing",
      subject: "Mathematics",
      date: new Date(2025, 9, 14),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 15), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 17), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 21), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 27), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 14), status: "scheduled" },
      ],
      synced: false,
      resources: [
        { name: "StatQuest Videos", url: "https://example.com/stats" },
      ],
      notes: "p-values, null hypothesis, Type I and Type II errors. Practice problems.",
    },
    {
      id: 10,
      taskName: "English Literature - Shakespeare Sonnets",
      subject: "English",
      date: new Date(2025, 9, 13),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 14), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 16), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 20), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 26), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 13), status: "scheduled" },
      ],
      synced: false,
      resources: [],
      notes: "Sonnet 18, 116, 130. Analyze iambic pentameter and rhyme scheme.",
    },
    {
      id: 11,
      taskName: "Thermodynamics - Laws of Heat Transfer",
      subject: "Physics",
      date: new Date(2025, 9, 12),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 13), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 15), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 19), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 25), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 12), status: "scheduled" },
      ],
      synced: false,
      resources: [
        { name: "Lecture Notes", url: "https://example.com/thermo" },
      ],
      notes: "First law: energy conservation. Second law: entropy. Carnot cycle.",
    },
    {
      id: 12,
      taskName: "SQL - Database Normalization",
      subject: "Computer Science",
      date: new Date(2025, 9, 11),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 12), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 14), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 18), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 24), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 11), status: "scheduled" },
      ],
      synced: false,
      resources: [],
      notes: "1NF, 2NF, 3NF, BCNF. Eliminate redundancy and anomalies.",
    },
    {
      id: 13,
      taskName: "Spanish Grammar - Subjunctive Mood",
      subject: "Spanish",
      date: new Date(2025, 9, 10),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 11), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 13), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 17), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 23), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 10), status: "scheduled" },
      ],
      synced: false,
      resources: [
        { name: "Duolingo Practice", url: "https://example.com/duolingo" },
      ],
      notes: "Triggers: WEIRDO (wishes, emotions, impersonal, recommendations, doubt, ojalá).",
    },
    {
      id: 14,
      taskName: "Psychology - Classical Conditioning",
      subject: "Psychology",
      date: new Date(2025, 9, 9),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 10), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 12), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 16), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 22), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 9), status: "scheduled" },
      ],
      synced: false,
      resources: [],
      notes: "Pavlov's dogs. UCS, UCR, CS, CR. Acquisition, extinction, spontaneous recovery.",
    },
    {
      id: 15,
      taskName: "Linear Algebra - Eigenvalues",
      subject: "Mathematics",
      date: new Date(2025, 9, 8),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 9), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 11), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 15), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 21), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 8), status: "scheduled" },
      ],
      synced: false,
      resources: [
        { name: "3Blue1Brown Videos", url: "https://example.com/3b1b" },
      ],
      notes: "det(A - λI) = 0. Eigenvectors and eigenvalues. Diagonalization.",
    },
    {
      id: 16,
      taskName: "Marketing - 4 Ps Framework",
      subject: "Business",
      date: new Date(2025, 9, 7),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 8), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 10), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 14), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 20), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 7), status: "scheduled" },
      ],
      synced: false,
      resources: [],
      notes: "Product, Price, Place, Promotion. Create case study examples.",
    },
    {
      id: 17,
      taskName: "Operating Systems - Deadlock Prevention",
      subject: "Computer Science",
      date: new Date(2025, 9, 6),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 7), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 9), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 13), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 19), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 6), status: "scheduled" },
      ],
      synced: false,
      resources: [
        { name: "OS Textbook Ch 7", url: "https://example.com/os" },
      ],
      notes: "Four conditions: mutual exclusion, hold and wait, no preemption, circular wait.",
    },
    {
      id: 18,
      taskName: "Philosophy - Kant's Categorical Imperative",
      subject: "Philosophy",
      date: new Date(2025, 9, 5),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 6), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 8), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 12), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 18), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 5), status: "scheduled" },
      ],
      synced: false,
      resources: [],
      notes: "Act only according to maxim you can will as universal law. Deontological ethics.",
    },
    {
      id: 19,
      taskName: "Biochemistry - Glycolysis Pathway",
      subject: "Chemistry",
      date: new Date(2025, 9, 4),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 5), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 7), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 11), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 17), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 4), status: "scheduled" },
      ],
      synced: false,
      resources: [
        { name: "Biochemistry Notes", url: "https://example.com/biochem" },
      ],
      notes: "10 steps, 2 ATP invested, 4 ATP produced, 2 NADH. Net: 2 ATP + 2 NADH.",
    },
    {
      id: 20,
      taskName: "Sociology - Social Stratification",
      subject: "Sociology",
      date: new Date(2025, 9, 3),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 4), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 6), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 10), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 16), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 3), status: "scheduled" },
      ],
      synced: false,
      resources: [],
      notes: "Class, status, power (Weber). Meritocracy vs structural inequality.",
    },
    {
      id: 21,
      taskName: "Electrical Engineering - Ohm's Law",
      subject: "Engineering",
      date: new Date(2025, 9, 2),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 3), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 5), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 9), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 15), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 2), status: "scheduled" },
      ],
      synced: false,
      resources: [
        { name: "Circuit Simulator", url: "https://example.com/circuits" },
      ],
      notes: "V = IR. Series vs parallel circuits. Kirchhoff's laws.",
    },
    {
      id: 22,
      taskName: "Art History - Renaissance Masters",
      subject: "Art",
      date: new Date(2025, 9, 1),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 2), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 4), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 8), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 14), status: "scheduled" },
        { completed: false, date: new Date(2025, 10, 1), status: "scheduled" },
      ],
      synced: false,
      resources: [],
      notes: "Leonardo, Michelangelo, Raphael. Characteristics: perspective, realism, humanism.",
    },
    {
      id: 23,
      taskName: "Music Theory - Chord Progressions",
      subject: "Music",
      date: new Date(2025, 8, 30),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 9, 1), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 3), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 7), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 13), status: "scheduled" },
        { completed: false, date: new Date(2025, 8, 30), status: "scheduled" },
      ],
      synced: false,
      resources: [
        { name: "Music Theory Lessons", url: "https://example.com/music" },
      ],
      notes: "I-IV-V-I progression. Circle of fifths. Major and minor keys.",
    },
    {
      id: 24,
      taskName: "Environmental Science - Carbon Cycle",
      subject: "Science",
      date: new Date(2025, 8, 29),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 8, 30), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 2), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 6), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 12), status: "scheduled" },
        { completed: false, date: new Date(2025, 8, 29), status: "scheduled" },
      ],
      synced: false,
      resources: [],
      notes: "Photosynthesis, respiration, decomposition, combustion. Ocean carbon sink.",
    },
    {
      id: 25,
      taskName: "Game Theory - Nash Equilibrium",
      subject: "Economics",
      date: new Date(2025, 8, 28),
      spacedRepEnabled: true,
      spacedRepetitions: [
        { completed: false, date: new Date(2025, 8, 29), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 1), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 5), status: "scheduled" },
        { completed: false, date: new Date(2025, 9, 11), status: "scheduled" },
        { completed: false, date: new Date(2025, 8, 28), status: "scheduled" },
      ],
      synced: false,
      resources: [
        { name: "Game Theory Videos", url: "https://example.com/gametheory" },
      ],
      notes: "Prisoner's dilemma. No player can improve by unilateral deviation.",
    },
  ]);

  const [isAddFormExpanded, setIsAddFormExpanded] = useState(false);
  const [newSession, setNewSession] = useState({
    taskName: "",
    subject: "",
    date: new Date().toISOString().split('T')[0],
    spacedRepEnabled: true,
    resources: "",
    notes: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSession, setSelectedSession] = useState<StudySession | null>(null);
  const [isDetailsDialogOpen, setIsDetailsDialogOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedSession, setEditedSession] = useState<StudySession | null>(null);
  
  // Filters
  const [dateFilter, setDateFilter] = useState<string>("all");
  const [subjectFilter, setSubjectFilter] = useState<string>("all");
  const [completionFilter, setCompletionFilter] = useState<string>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Multi-select
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [isMultiSelectDialogOpen, setIsMultiSelectDialogOpen] = useState(false);
  
  // Prevent background scrolling when multi-select dialog is open
  useEffect(() => {
    if (isMultiSelectDialogOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMultiSelectDialogOpen]);
  
  // Delete confirmation
  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    isOpen: boolean;
    sessionIds: number[];
    sessionNames: string[];
  }>({ isOpen: false, sessionIds: [], sessionNames: [] });

  const itemsPerPage = 20;
  
  // Calculate completion percentage
  const getCompletionPercentage = (session: StudySession): number => {
    if (!session.spacedRepEnabled || session.spacedRepetitions.length === 0) return 0;
    const completed = session.spacedRepetitions.filter(r => r.completed).length;
    return Math.round((completed / session.spacedRepetitions.length) * 100);
  };
  
  // Get unique subjects
  const uniqueSubjects = useMemo(() => {
    const subjects = [...new Set(sessions.map(s => s.subject).filter(Boolean))];
    return subjects.sort();
  }, [sessions]);

  // Apply filters
  const filteredSessions = useMemo(() => {
    let filtered = [...sessions];
    
    // Date filter
    if (dateFilter !== "all") {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      filtered = filtered.filter(session => {
        const sessionDate = new Date(session.date);
        sessionDate.setHours(0, 0, 0, 0);
        
        if (dateFilter === "today") {
          return sessionDate.getTime() === today.getTime();
        } else if (dateFilter === "week") {
          const weekAgo = new Date(today);
          weekAgo.setDate(weekAgo.getDate() - 7);
          return sessionDate >= weekAgo;
        } else if (dateFilter === "month") {
          const monthAgo = new Date(today);
          monthAgo.setMonth(monthAgo.getMonth() - 1);
          return sessionDate >= monthAgo;
        }
        return true;
      });
    }
    
    // Subject filter
    if (subjectFilter !== "all") {
      filtered = filtered.filter(session => session.subject === subjectFilter);
    }
    
    // Completion filter
    if (completionFilter !== "all") {
      filtered = filtered.filter(session => {
        const completion = getCompletionPercentage(session);
        if (completionFilter === "not-started") return completion === 0;
        if (completionFilter === "in-progress") return completion > 0 && completion < 100;
        if (completionFilter === "high-progress") return completion >= 60 && completion < 100;
        if (completionFilter === "completed") return completion === 100;
        return true;
      });
    }
    
    return filtered;
  }, [sessions, dateFilter, subjectFilter, completionFilter]);
  
  const paginatedSessions = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredSessions.slice(startIndex, endIndex);
  }, [filteredSessions, currentPage]);

  const totalPages = Math.ceil(filteredSessions.length / itemsPerPage);

  const getRepetitionStatus = (repetitions: SpacedRepetition[], index: number): "completed" | "upcoming" | "scheduled" => {
    const rep = repetitions[index];
    if (rep.completed) return "completed";
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const repDate = new Date(rep.date);
    repDate.setHours(0, 0, 0, 0);
    
    const diffDays = Math.floor((repDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 3 && diffDays >= 0) return "upcoming";
    return "scheduled";
  };

  const handleAddSession = () => {
    if (!newSession.taskName.trim()) return;

    const resourcesArray: Resource[] = newSession.resources
      .split('\n')
      .filter(line => line.trim())
      .map(line => {
        const parts = line.split('|').map(p => p.trim());
        return {
          name: parts[0] || 'Untitled Resource',
          url: parts[1] || '#',
        };
      });

    const baseDate = new Date(newSession.date);
    // Generate repetitions based on current settings
    const reps: SpacedRepetition[] = newSession.spacedRepEnabled ? 
      dayGaps.map((gap, index) => {
        const cumulativeDays = dayGaps.slice(0, index + 1).reduce((sum, g) => sum + g, 0);
        return {
          completed: false,
          date: new Date(baseDate.getTime() + cumulativeDays * 24 * 60 * 60 * 1000),
          status: "scheduled" as const,
        };
      }) : [];

    const session: StudySession = {
      id: Date.now(),
      taskName: newSession.taskName,
      subject: newSession.subject,
      date: baseDate,
      spacedRepEnabled: newSession.spacedRepEnabled,
      spacedRepetitions: reps,
      synced: newSession.spacedRepEnabled,
      resources: resourcesArray,
      notes: newSession.notes,
    };

    setSessions([session, ...sessions]);
    setNewSession({
      taskName: "",
      subject: "",
      date: new Date().toISOString().split('T')[0],
      spacedRepEnabled: true,
      resources: "",
      notes: "",
    });
    setIsAddFormExpanded(false);
  };

  const handleDeleteSession = (id: number) => {
    const session = sessions.find(s => s.id === id);
    if (session) {
      setDeleteConfirmation({
        isOpen: true,
        sessionIds: [id],
        sessionNames: [session.taskName],
      });
    }
  };
  
  const confirmDelete = () => {
    setSessions(sessions.filter(s => !deleteConfirmation.sessionIds.includes(s.id)));
    setDeleteConfirmation({ isOpen: false, sessionIds: [], sessionNames: [] });
    setIsDetailsDialogOpen(false);
    setSelectedIds([]);
    setIsMultiSelectDialogOpen(false);
    toast.success(`Deleted ${deleteConfirmation.sessionIds.length} session(s)`);
  };

  const handleToggleSync = (id: number) => {
    setSessions(sessions.map(s => {
      if (s.id === id) {
        // If spaced rep is not enabled, enable it when syncing
        if (!s.spacedRepEnabled) {
          const baseDate = s.date;
          const newReps: SpacedRepetition[] = dayGaps.map((gap, index) => {
            const cumulativeDays = dayGaps.slice(0, index + 1).reduce((sum, g) => sum + g, 0);
            return {
              completed: false,
              date: new Date(baseDate.getTime() + cumulativeDays * 24 * 60 * 60 * 1000),
              status: "scheduled" as const,
            };
          });
          toast.success("Spaced repetition enabled and synced to calendar!");
          return { ...s, spacedRepEnabled: true, synced: true, spacedRepetitions: newReps };
        }
        
        const newSyncedState = !s.synced;
        // If toggling sync on and spaced rep is enabled, regenerate repetitions based on current settings
        if (newSyncedState && s.spacedRepEnabled) {
          const baseDate = s.date;
          const newReps: SpacedRepetition[] = dayGaps.map((gap, index) => {
            const cumulativeDays = dayGaps.slice(0, index + 1).reduce((sum, g) => sum + g, 0);
            // Preserve completion status if the repetition exists
            const existingRep = s.spacedRepetitions[index];
            return {
              completed: existingRep?.completed || false,
              date: new Date(baseDate.getTime() + cumulativeDays * 24 * 60 * 60 * 1000),
              status: existingRep?.status || "scheduled" as const,
            };
          });
          toast.success(newSyncedState ? "Synced to calendar!" : "Unsynced from calendar");
          return { ...s, synced: newSyncedState, spacedRepetitions: newReps };
        }
        toast.success(newSyncedState ? "Synced to calendar!" : "Unsynced from calendar");
        return { ...s, synced: newSyncedState };
      }
      return s;
    }));
    
    if (selectedSession?.id === id) {
      const updatedSession = sessions.find(s => s.id === id);
      if (updatedSession) {
        // If spaced rep is not enabled, enable it when syncing
        if (!updatedSession.spacedRepEnabled) {
          const baseDate = updatedSession.date;
          const newReps: SpacedRepetition[] = dayGaps.map((gap, index) => {
            const cumulativeDays = dayGaps.slice(0, index + 1).reduce((sum, g) => sum + g, 0);
            return {
              completed: false,
              date: new Date(baseDate.getTime() + cumulativeDays * 24 * 60 * 60 * 1000),
              status: "scheduled" as const,
            };
          });
          setSelectedSession({ ...updatedSession, spacedRepEnabled: true, synced: true, spacedRepetitions: newReps });
          setEditedSession({ ...updatedSession, spacedRepEnabled: true, synced: true, spacedRepetitions: newReps });
        } else {
          const newSyncedState = !updatedSession.synced;
          if (newSyncedState && updatedSession.spacedRepEnabled) {
            const baseDate = updatedSession.date;
            const newReps: SpacedRepetition[] = dayGaps.map((gap, index) => {
              const cumulativeDays = dayGaps.slice(0, index + 1).reduce((sum, g) => sum + g, 0);
              const existingRep = updatedSession.spacedRepetitions[index];
              return {
                completed: existingRep?.completed || false,
                date: new Date(baseDate.getTime() + cumulativeDays * 24 * 60 * 60 * 1000),
                status: existingRep?.status || "scheduled" as const,
              };
            });
            setSelectedSession({ ...updatedSession, synced: newSyncedState, spacedRepetitions: newReps });
            setEditedSession({ ...updatedSession, synced: newSyncedState, spacedRepetitions: newReps });
          } else {
            setSelectedSession({ ...updatedSession, synced: newSyncedState });
            setEditedSession({ ...updatedSession, synced: newSyncedState });
          }
        }
      }
    }
  };

  const handleBulkDelete = () => {
    if (selectedIds.length === 0) return;
    const selectedSessions = sessions.filter(s => selectedIds.includes(s.id));
    setDeleteConfirmation({
      isOpen: true,
      sessionIds: selectedIds,
      sessionNames: selectedSessions.map(s => s.taskName),
    });
  };
  
  const handleBulkArchive = () => {
    if (selectedIds.length === 0) return;
    
    // Check if all selected sessions have >= 60% completion
    const sessionsToArchive = sessions.filter(s => selectedIds.includes(s.id));
    const canArchive = sessionsToArchive.every(s => getCompletionPercentage(s) >= 60);
    
    if (!canArchive) {
      toast.error("Cannot archive: Some sessions have less than 60% completion");
      return;
    }
    
    // In a real app, this would move to an archive. For now, we'll just show a toast
    toast.success(`Archived ${selectedIds.length} session(s) (≥60% complete)`);
    setSessions(sessions.filter(s => !selectedIds.includes(s.id)));
    setSelectedIds([]);
  };
  
  const handleBulkToggleSync = () => {
    if (selectedIds.length === 0) return;
    
    // Determine if we should sync or unsync based on majority
    const selectedSessions = sessions.filter(s => selectedIds.includes(s.id));
    const syncedCount = selectedSessions.filter(s => s.synced).length;
    const shouldSync = syncedCount < selectedSessions.length / 2;
    
    setSessions(sessions.map(s => {
      if (selectedIds.includes(s.id)) {
        if (shouldSync) {
          // Enable spaced rep if not already enabled
          if (!s.spacedRepEnabled) {
            const baseDate = s.date;
            const newReps: SpacedRepetition[] = dayGaps.map((gap, index) => {
              const cumulativeDays = dayGaps.slice(0, index + 1).reduce((sum, g) => sum + g, 0);
              return {
                completed: false,
                date: new Date(baseDate.getTime() + cumulativeDays * 24 * 60 * 60 * 1000),
                status: "scheduled" as const,
              };
            });
            return { ...s, spacedRepEnabled: true, synced: true, spacedRepetitions: newReps };
          }
          
          // Sync if not already synced
          if (!s.synced) {
            const baseDate = s.date;
            const newReps: SpacedRepetition[] = dayGaps.map((gap, index) => {
              const cumulativeDays = dayGaps.slice(0, index + 1).reduce((sum, g) => sum + g, 0);
              const existingRep = s.spacedRepetitions[index];
              return {
                completed: existingRep?.completed || false,
                date: new Date(baseDate.getTime() + cumulativeDays * 24 * 60 * 60 * 1000),
                status: existingRep?.status || "scheduled" as const,
              };
            });
            return { ...s, synced: true, spacedRepetitions: newReps };
          }
        } else {
          // Unsync
          return { ...s, synced: false };
        }
      }
      return s;
    }));
    
    setSelectedIds([]);
    setIsMultiSelectDialogOpen(false);
    toast.success(shouldSync ? `Synced ${selectedIds.length} session(s)` : `Unsynced ${selectedIds.length} session(s)`);
  };
  
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const newSelectedIds = paginatedSessions.map(s => s.id);
      setSelectedIds(newSelectedIds);
      if (!isMultiSelectDialogOpen) {
        setTimeout(() => setIsMultiSelectDialogOpen(true), 100);
      }
    } else {
      setSelectedIds([]);
      if (isMultiSelectDialogOpen) {
        setIsMultiSelectDialogOpen(false);
      }
    }
  };
  
  const handleSelectSession = (id: number, checked: boolean) => {
    if (checked) {
      const newSelectedIds = [...selectedIds, id];
      setSelectedIds(newSelectedIds);
      // Auto-open multi-select dialog when first item is selected
      if (selectedIds.length === 0 && !isMultiSelectDialogOpen) {
        setTimeout(() => setIsMultiSelectDialogOpen(true), 100);
      }
    } else {
      const newSelectedIds = selectedIds.filter(sid => sid !== id);
      setSelectedIds(newSelectedIds);
      // Close dialog if no items selected and dialog is open
      if (newSelectedIds.length === 0 && isMultiSelectDialogOpen) {
        setIsMultiSelectDialogOpen(false);
      }
    }
  };
  
  const handleCancelSelection = () => {
    setSelectedIds([]);
    setIsMultiSelectDialogOpen(false);
  };
  
  const canArchiveSelected = useMemo(() => {
    if (selectedIds.length === 0) return false;
    const sessionsToCheck = sessions.filter(s => selectedIds.includes(s.id));
    return sessionsToCheck.every(s => getCompletionPercentage(s) >= 60);
  }, [selectedIds, sessions]);

  const handleViewDetails = (session: StudySession) => {
    setSelectedSession(session);
    setEditedSession({ ...session });
    setIsEditMode(false);
    setIsDetailsDialogOpen(true);
  };

  const handleEnterEditMode = () => {
    setIsEditMode(true);
  };

  const handleSaveEdit = () => {
    if (!editedSession) return;

    setSessions(sessions.map(s => 
      s.id === editedSession.id ? editedSession : s
    ));
    setSelectedSession(editedSession);
    setIsEditMode(false);
  };

  const handleCancelEdit = () => {
    setEditedSession(selectedSession ? { ...selectedSession } : null);
    setIsEditMode(false);
  };

  const parseResourcesInput = (input: string): Resource[] => {
    return input
      .split('\n')
      .filter(line => line.trim())
      .map(line => {
        const parts = line.split('|').map(p => p.trim());
        return {
          name: parts[0] || 'Untitled Resource',
          url: parts[1] || '#',
        };
      });
  };

  const formatResourcesForInput = (resources: Resource[]): string => {
    return resources.map(r => `${r.name} | ${r.url}`).join('\n');
  };

  return (
    <div className="space-y-6 relative">
      {/* Add New Session */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Study Sessions</CardTitle>
            <Button
              onClick={() => setIsAddFormExpanded(!isAddFormExpanded)}
              className="bg-gradient-primary text-white hover:opacity-90 transition-opacity gap-2"
              size="sm"
            >
              {isAddFormExpanded ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  Cancel
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4" />
                  Add New Session
                </>
              )}
            </Button>
          </div>
        </CardHeader>
        
        <AnimatePresence>
          {isAddFormExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <CardContent className="space-y-4 pt-0">
                <div className="p-4 rounded-lg border border-primary/20 bg-primary/5 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="task-name">Task Name</Label>
                      <Input
                        id="task-name"
                        placeholder="Enter task title..."
                        value={newSession.taskName}
                        onChange={(e) => setNewSession({ ...newSession, taskName: e.target.value })}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="e.g., Artificial Intelligence"
                        value={newSession.subject}
                        onChange={(e) => setNewSession({ ...newSession, subject: e.target.value })}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="task-date">Date Learned</Label>
                    <Input
                      id="task-date"
                      type="date"
                      value={newSession.date}
                      onChange={(e) => setNewSession({ ...newSession, date: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resources">Resources (Optional)</Label>
                    <Textarea
                      id="resources"
                      placeholder="One per line. Format: Name | URL&#10;Example:&#10;Lecture 5 Recording | https://example.com/lecture5&#10;Textbook Chapter 7 | https://example.com/textbook"
                      value={newSession.resources}
                      onChange={(e) => setNewSession({ ...newSession, resources: e.target.value })}
                      rows={4}
                    />
                    <p className="text-sm text-muted-foreground">Format each line as: Resource Name | URL</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="task-notes">Notes (Optional)</Label>
                    <Textarea
                      id="task-notes"
                      placeholder="Add your summary, key points, or important concepts..."
                      value={newSession.notes}
                      onChange={(e) => setNewSession({ ...newSession, notes: e.target.value })}
                      rows={3}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="spaced-rep"
                      checked={newSession.spacedRepEnabled}
                      onCheckedChange={(checked) => 
                        setNewSession({ ...newSession, spacedRepEnabled: checked as boolean })
                      }
                    />
                    <Label htmlFor="spaced-rep" className="cursor-pointer">
                      Enable Spaced Repetition (Auto-sync to calendar)
                    </Label>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      onClick={handleAddSession}
                      className="bg-gradient-primary text-white hover:opacity-90 transition-opacity"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Task
                    </Button>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* Filter Icon */}
      <div className="flex justify-between items-center">
        <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
              {(dateFilter !== "all" || subjectFilter !== "all" || completionFilter !== "all") && (
                <Badge variant="default" className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                  <span className="text-xs">
                    {[dateFilter, subjectFilter, completionFilter].filter(f => f !== "all").length}
                  </span>
                </Badge>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="start">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4>Filter Sessions</h4>
                <p className="text-sm text-muted-foreground">
                  Narrow down your study sessions
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Date Range</Label>
                  <Select value={dateFilter} onValueChange={setDateFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All dates" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Subject</Label>
                  <Select value={subjectFilter} onValueChange={setSubjectFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All subjects" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Subjects</SelectItem>
                      {uniqueSubjects.map(subject => (
                        <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Progress</Label>
                  <Select value={completionFilter} onValueChange={setCompletionFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="All progress" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Progress</SelectItem>
                      <SelectItem value="not-started">Not Started (0%)</SelectItem>
                      <SelectItem value="in-progress">In Progress (1-59%)</SelectItem>
                      <SelectItem value="high-progress">High Progress (60-99%)</SelectItem>
                      <SelectItem value="completed">Completed (100%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t">
                <p className="text-sm text-muted-foreground">
                  {filteredSessions.length} of {sessions.length} sessions
                </p>
                {(dateFilter !== "all" || subjectFilter !== "all" || completionFilter !== "all") && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setDateFilter("all");
                      setSubjectFilter("all");
                      setCompletionFilter("all");
                    }}
                    className="h-8"
                  >
                    Clear All
                  </Button>
                )}
              </div>
            </div>
          </PopoverContent>
        </Popover>
        
        {selectedIds.length > 0 && (
          <Badge variant="secondary" className="gap-2">
            {selectedIds.length} selected
          </Badge>
        )}
      </div>

      {/* Sessions List */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">
                    <Checkbox
                      checked={paginatedSessions.length > 0 && selectedIds.length === paginatedSessions.length}
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead className="w-[35%]">Task Name</TableHead>
                  <TableHead className="w-[15%]">Subject</TableHead>
                  <TableHead className="w-[12%]">Date</TableHead>
                  <TableHead className="w-[25%]">Progress & Status</TableHead>
                  <TableHead className="w-[15%] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedSessions.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-12 text-muted-foreground">
                      {filteredSessions.length === 0 && sessions.length > 0 
                        ? "No sessions match your filters. Try adjusting the filters above."
                        : "No study sessions yet. Click \"Add New Session\" to get started!"
                      }
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedSessions.map((session) => {
                    const completion = getCompletionPercentage(session);
                    return (
                      <TableRow key={session.id} className="hover:bg-muted/50">
                        <TableCell onClick={(e) => e.stopPropagation()}>
                          <Checkbox
                            checked={selectedIds.includes(session.id)}
                            onCheckedChange={(checked) => handleSelectSession(session.id, checked as boolean)}
                          />
                        </TableCell>
                        <TableCell onClick={() => handleViewDetails(session)} className="cursor-pointer">
                          {session.taskName}
                        </TableCell>
                        <TableCell onClick={() => handleViewDetails(session)} className="cursor-pointer">
                          {session.subject && (
                            <Badge variant="outline" className="bg-primary/10">
                              {session.subject}
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell onClick={() => handleViewDetails(session)} className="cursor-pointer">
                          {session.date.toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </TableCell>
                        <TableCell onClick={() => handleViewDetails(session)} className="cursor-pointer">
                          <div>
                            {/* Spaced Repetition Circles */}
                            {session.spacedRepEnabled && session.synced ? (
                              <div className="flex gap-1">
                                {session.spacedRepetitions.map((rep, idx) => {
                                  const status = getRepetitionStatus(session.spacedRepetitions, idx);
                                  return (
                                    <div
                                      key={idx}
                                      className={`w-3 h-3 rounded-full border-2 ${
                                        status === 'completed'
                                          ? 'bg-gradient-success border-chart-2' 
                                          : 'border-muted-foreground bg-transparent'
                                      }`}
                                      title={rep.date.toLocaleDateString()}
                                    />
                                  );
                                })}
                              </div>
                            ) : session.spacedRepEnabled && !session.synced ? (
                              <div className="flex items-center gap-1 text-destructive">
                                <AlertTriangle className="h-3 w-3" />
                                <span className="text-xs">Not synced</span>
                              </div>
                            ) : (
                              <span className="text-muted-foreground text-xs">Not enabled</span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-right" onClick={(e) => e.stopPropagation()}>
                          <div className="flex justify-end gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => {
                                handleViewDetails(session);
                                setTimeout(() => handleEnterEditMode(), 100);
                              }}
                              className="h-8 w-8"
                              title="Edit"
                              disabled={selectedIds.length > 0}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDeleteSession(session.id)}
                              className="h-8 w-8 text-destructive hover:text-destructive"
                              title="Delete"
                              disabled={selectedIds.length > 0}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleToggleSync(session.id)}
                              className={`h-8 w-8 ${session.synced ? 'text-primary' : ''}`}
                              title={session.synced ? 'Synced to Calendar' : 'Click to enable & sync'}
                              disabled={selectedIds.length > 0}
                            >
                              <CalendarIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
            
            {[...Array(totalPages)].map((_, idx) => {
              const page = idx + 1;
              if (
                page === 1 || 
                page === totalPages || 
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return (
                  <PaginationItem key={page}>
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }
              return null;
            })}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      {/* Details/Edit Dialog */}
      <Dialog open={isDetailsDialogOpen} onOpenChange={setIsDetailsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {isEditMode && editedSession ? (
                <Input
                  value={editedSession.taskName}
                  onChange={(e) => setEditedSession({ ...editedSession, taskName: e.target.value })}
                  className="text-2xl h-auto py-1"
                />
              ) : (
                selectedSession?.taskName
              )}
            </DialogTitle>
            <DialogDescription className="flex items-center gap-2">
              {isEditMode && editedSession ? (
                <Input
                  value={editedSession.subject}
                  onChange={(e) => setEditedSession({ ...editedSession, subject: e.target.value })}
                  placeholder="Subject"
                  className="max-w-xs"
                />
              ) : (
                selectedSession?.subject && (
                  <Badge variant="outline" className="bg-primary/10">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {selectedSession.subject}
                  </Badge>
                )
              )}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Date Learned */}
            <div>
              <p className="text-sm text-muted-foreground mb-1">Learned:</p>
              <p>
                {selectedSession?.date.toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </p>
            </div>

            {/* Spaced Repetition Schedule */}
            {selectedSession?.spacedRepEnabled ? (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CalendarIcon className="h-4 w-4 text-primary" />
                  <h4>Spaced Repetition Schedule:</h4>
                </div>
                {selectedSession.synced ? (
                  <div className="space-y-2 pl-6">
                    {selectedSession.spacedRepetitions.map((rep, idx) => {
                      const status = getRepetitionStatus(selectedSession.spacedRepetitions, idx);
                      const cumulativeDays = dayGaps.slice(0, idx + 1).reduce((sum, g) => sum + g, 0);
                      return (
                        <div key={idx} className="flex items-center gap-3">
                          {status === 'completed' ? (
                            <CheckCircle2 className="h-5 w-5 text-chart-2" />
                          ) : status === 'upcoming' ? (
                            <Clock className="h-5 w-5 text-primary" />
                          ) : (
                            <Clock className="h-5 w-5 text-muted-foreground" />
                          )}
                          <span className={status === 'completed' ? 'text-muted-foreground' : ''}>
                            Review {idx + 1}: {rep.date.toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric'
                            })} (Day {cumulativeDays})
                          </span>
                          <span className="ml-auto text-sm text-muted-foreground">
                            - {status === 'completed' ? 'Completed' : status === 'upcoming' ? 'Upcoming' : 'Scheduled'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="pl-6 flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    <span className="text-destructive">Not synced to calendar. Click the sync button below to enable schedule.</span>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                  <h4>Spaced Repetition:</h4>
                </div>
                <div className="pl-6 flex items-center gap-2 p-3 rounded-lg bg-muted/30 border border-muted">
                  <span className="text-muted-foreground">Not enabled. Click "Enable & Sync to Calendar" below to activate spaced repetition.</span>
                </div>
              </div>
            )}

            {/* Resources */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Link className="h-4 w-4 text-primary" />
                <h4>Resources:</h4>
              </div>
              {isEditMode && editedSession ? (
                <Textarea
                  value={formatResourcesForInput(editedSession.resources)}
                  onChange={(e) => setEditedSession({ 
                    ...editedSession, 
                    resources: parseResourcesInput(e.target.value)
                  })}
                  placeholder="One per line. Format: Name | URL"
                  rows={4}
                  className="pl-6"
                />
              ) : (
                <div className="space-y-2 pl-6">
                  {selectedSession?.resources.length === 0 ? (
                    <p className="text-muted-foreground">No resources added</p>
                  ) : (
                    selectedSession?.resources.map((resource, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Link className="h-4 w-4 text-muted-foreground" />
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {resource.name}
                        </a>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Notes */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-4 w-4 text-primary" />
                <h4>Notes:</h4>
              </div>
              {isEditMode && editedSession ? (
                <Textarea
                  value={editedSession.notes}
                  onChange={(e) => setEditedSession({ ...editedSession, notes: e.target.value })}
                  placeholder="Add your summary, key points, or important concepts..."
                  rows={4}
                  className="pl-6"
                />
              ) : (
                <p className="text-muted-foreground pl-6">
                  {selectedSession?.notes ? `"${selectedSession.notes}"` : "No notes added"}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-4 border-t">
              {isEditMode ? (
                <>
                  <Button
                    onClick={handleSaveEdit}
                    className="bg-gradient-primary text-white hover:opacity-90"
                  >
                    Save Changes
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleCancelEdit}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    onClick={handleEnterEditMode}
                    className="gap-2"
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => selectedSession && handleDeleteSession(selectedSession.id)}
                    className="gap-2 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </Button>
                  <Button
                    variant={selectedSession?.synced ? "default" : "outline"}
                    onClick={() => selectedSession && handleToggleSync(selectedSession.id)}
                    className={selectedSession?.synced ? "gap-2 bg-primary text-white" : "gap-2"}
                  >
                    <CalendarIcon className="h-4 w-4" />
                    {selectedSession?.synced 
                      ? "Synced to Calendar" 
                      : !selectedSession?.spacedRepEnabled 
                        ? "Enable & Sync to Calendar"
                        : "Sync to Calendar"
                    }
                  </Button>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Multi-Select Overlay - Exact Carbon Copy of Main Table */}
      <AnimatePresence>
        {isMultiSelectDialogOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={handleCancelSelection}
            />
            
            {/* Multi-Select Table Overlay - Positioned Absolutely to Match Main Content */}
            <div className="absolute inset-0 z-50 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="space-y-6 pointer-events-auto"
              >
                {/* Spacer to match "Add New Session" card height */}
                <div style={{ height: isAddFormExpanded ? 'auto' : '88px' }} className="invisible">
                  {/* This matches the collapsed Add New Session card */}
                </div>
                
                {/* Filter Bar with Bulk Actions */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Filter className="h-4 w-4" />
                          Filters
                          {(dateFilter !== "all" || subjectFilter !== "all" || completionFilter !== "all") && (
                            <Badge variant="default" className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center">
                              <span className="text-xs">
                                {[dateFilter, subjectFilter, completionFilter].filter(f => f !== "all").length}
                              </span>
                            </Badge>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-80" align="start">
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h4>Filter Sessions</h4>
                            <p className="text-sm text-muted-foreground">
                              Narrow down your study sessions
                            </p>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label>Date Range</Label>
                              <Select value={dateFilter} onValueChange={setDateFilter}>
                                <SelectTrigger>
                                  <SelectValue placeholder="All dates" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="all">All Time</SelectItem>
                                  <SelectItem value="today">Today</SelectItem>
                                  <SelectItem value="week">This Week</SelectItem>
                                  <SelectItem value="month">This Month</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label>Subject</Label>
                              <Select value={subjectFilter} onValueChange={setSubjectFilter}>
                                <SelectTrigger>
                                  <SelectValue placeholder="All subjects" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="all">All Subjects</SelectItem>
                                  {uniqueSubjects.map(subject => (
                                    <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label>Progress</Label>
                              <Select value={completionFilter} onValueChange={setCompletionFilter}>
                                <SelectTrigger>
                                  <SelectValue placeholder="All progress" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="all">All Progress</SelectItem>
                                  <SelectItem value="not-started">Not Started (0%)</SelectItem>
                                  <SelectItem value="in-progress">In Progress (1-59%)</SelectItem>
                                  <SelectItem value="high-progress">High Progress (60-99%)</SelectItem>
                                  <SelectItem value="completed">Completed (100%)</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between pt-2 border-t">
                            <p className="text-sm text-muted-foreground">
                              {filteredSessions.length} of {sessions.length} sessions
                            </p>
                            {(dateFilter !== "all" || subjectFilter !== "all" || completionFilter !== "all") && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  setDateFilter("all");
                                  setSubjectFilter("all");
                                  setCompletionFilter("all");
                                }}
                                className="h-8"
                              >
                                Clear All
                              </Button>
                            )}
                          </div>
                        </div>
                      </PopoverContent>
                    </Popover>
                    
                    <Badge variant="secondary" className="gap-1">
                      {selectedIds.length} selected
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      onClick={handleBulkToggleSync}
                      className="gap-2"
                      size="sm"
                    >
                      <CalendarIcon className="h-4 w-4" />
                      {sessions.filter(s => selectedIds.includes(s.id)).filter(s => s.synced).length < selectedIds.length / 2 
                        ? 'Sync All' 
                        : 'Unsync All'
                      }
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleBulkArchive}
                      disabled={!canArchiveSelected}
                      className="gap-2"
                      size="sm"
                      title={!canArchiveSelected ? "All selected sessions must have ≥60% completion" : ""}
                    >
                      <Archive className="h-4 w-4" />
                      Archive
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleBulkDelete}
                      className="gap-2 text-destructive hover:text-destructive"
                      size="sm"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </Button>
                    <Button
                      variant="ghost"
                      onClick={handleCancelSelection}
                      size="sm"
                    >
                      <X className="h-4 w-4 mr-1" />
                      Close
                    </Button>
                  </div>
                </div>
                
                {/* Table Card - Exact Copy */}
                <Card className="flex flex-col max-h-[calc(100vh-350px)]">
                  <CardContent className="p-0 flex-1 overflow-hidden">
                    <div className="overflow-auto h-full">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[50px]">
                              <Checkbox
                                checked={paginatedSessions.length > 0 && selectedIds.length === paginatedSessions.length}
                                onCheckedChange={handleSelectAll}
                              />
                            </TableHead>
                            <TableHead className="w-[35%]">Task Name</TableHead>
                            <TableHead className="w-[15%]">Subject</TableHead>
                            <TableHead className="w-[12%]">Date</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {paginatedSessions.length === 0 ? (
                            <TableRow>
                              <TableCell colSpan={4} className="text-center py-12 text-muted-foreground">
                                {filteredSessions.length === 0 && sessions.length > 0 
                                  ? "No sessions match your filters. Try adjusting the filters above."
                                  : "No study sessions yet."
                                }
                              </TableCell>
                            </TableRow>
                          ) : (
                            paginatedSessions.map((session) => {
                              const isSelected = selectedIds.includes(session.id);
                              return (
                                <TableRow key={session.id} className={`hover:bg-muted/50 ${isSelected ? 'bg-primary/5' : ''}`}>
                                  <TableCell onClick={(e) => e.stopPropagation()}>
                                    <Checkbox
                                      checked={isSelected}
                                      onCheckedChange={(checked) => handleSelectSession(session.id, checked as boolean)}
                                    />
                                  </TableCell>
                                  <TableCell onClick={() => handleViewDetails(session)} className="cursor-pointer">
                                    {session.taskName}
                                  </TableCell>
                                  <TableCell onClick={() => handleViewDetails(session)} className="cursor-pointer">
                                    {session.subject && (
                                      <Badge variant="outline" className="bg-primary/10">
                                        {session.subject}
                                      </Badge>
                                    )}
                                  </TableCell>
                                  <TableCell onClick={() => handleViewDetails(session)} className="cursor-pointer">
                                    {session.date.toLocaleDateString('en-US', { 
                                      month: 'short', 
                                      day: 'numeric',
                                      year: 'numeric'
                                    })}
                                  </TableCell>
                                </TableRow>
                              );
                            })
                          )}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Pagination - Exact Copy */}
                {totalPages > 1 && (
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                          className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                        />
                      </PaginationItem>
                      
                      {[...Array(totalPages)].map((_, idx) => {
                        const page = idx + 1;
                        if (
                          page === 1 || 
                          page === totalPages || 
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <PaginationItem key={page}>
                              <PaginationLink
                                onClick={() => setCurrentPage(page)}
                                isActive={currentPage === page}
                                className="cursor-pointer"
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        } else if (page === currentPage - 2 || page === currentPage + 2) {
                          return (
                            <PaginationItem key={page}>
                              <PaginationEllipsis />
                            </PaginationItem>
                          );
                        }
                        return null;
                      })}
                      
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                          className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                )}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteConfirmation.isOpen} onOpenChange={(open) => {
        if (!open) setDeleteConfirmation({ isOpen: false, sessionIds: [], sessionNames: [] });
      }}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription asChild>
              <div className="space-y-2">
                <p>
                  {deleteConfirmation.sessionIds.length === 1 
                    ? "This will permanently delete the following session:"
                    : `This will permanently delete ${deleteConfirmation.sessionIds.length} sessions:`
                  }
                </p>
                <ul className="list-disc list-inside space-y-1 max-h-[200px] overflow-y-auto">
                  {deleteConfirmation.sessionNames.map((name, idx) => (
                    <li key={idx} className="text-foreground">
                      {name}
                    </li>
                  ))}
                </ul>
                <p className="pt-2">This action cannot be undone.</p>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
