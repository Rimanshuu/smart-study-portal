import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { 
  ChevronLeft, 
  ChevronRight, 
  CalendarDays,
  Filter,
  X,
  Check,
  ExternalLink
} from "lucide-react";

type Priority = "very-high" | "high" | "mid" | "low" | "none";
type Tag = string;

interface Task {
  id: number;
  title: string;
  dueDate: Date;
  priority: Priority;
  tags: Tag[];
  completed: boolean;
  time?: string;
  classLink?: string; // URL for live classes/meetings (Zoom, Teams, etc.)
}

type ViewMode = "week" | "month";

export function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<ViewMode>("month");
  const [selectedPriorities, setSelectedPriorities] = useState<Priority[]>([]);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [showLiveClassesOnly, setShowLiveClassesOnly] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Modal filters (for day cell dialog)
  const [modalSelectedPriorities, setModalSelectedPriorities] = useState<Priority[]>([]);
  const [modalSelectedTags, setModalSelectedTags] = useState<Tag[]>([]);
  const [modalShowLiveClassesOnly, setModalShowLiveClassesOnly] = useState(false);

  // Mock tasks - In production, this would come from your database/API
  // Google Calendar integration would map events to this format
  const allTasks: Task[] = [
    { id: 1, title: "Complete project proposal", dueDate: new Date(2025, 9, 19), priority: "very-high", tags: ["Work"], completed: false, time: "10:00 AM" },
    { id: 2, title: "Study React hooks", dueDate: new Date(2025, 9, 19), priority: "high", tags: ["Study", "Personal"], completed: false, time: "2:00 PM" },
    { id: 3, title: "Data Structures Lecture", dueDate: new Date(2025, 9, 19), priority: "mid", tags: ["Study"], completed: false, time: "4:00 PM", classLink: "https://zoom.us/j/123456789" },
    { id: 4, title: "Submit assignment", dueDate: new Date(2025, 9, 20), priority: "very-high", tags: ["Study"], completed: false, time: "11:59 PM" },
    { id: 5, title: "Code review", dueDate: new Date(2025, 9, 21), priority: "high", tags: ["Work"], completed: false, time: "3:00 PM" },
    { id: 6, title: "Grocery shopping", dueDate: new Date(2025, 9, 22), priority: "low", tags: ["Personal"], completed: false },
    { id: 7, title: "Machine Learning Lab", dueDate: new Date(2025, 9, 22), priority: "high", tags: ["Study"], completed: false, time: "1:00 PM", classLink: "https://teams.microsoft.com/l/meetup-join/example" },
    { id: 8, title: "Prepare presentation", dueDate: new Date(2025, 9, 25), priority: "very-high", tags: ["Work"], completed: false, time: "9:00 AM" },
    { id: 9, title: "Dentist appointment", dueDate: new Date(2025, 9, 23), priority: "mid", tags: ["Personal"], completed: false, time: "2:30 PM" },
    { id: 10, title: "Research paper deadline", dueDate: new Date(2025, 9, 30), priority: "very-high", tags: ["Study"], completed: false },
    { id: 11, title: "Weekly review", dueDate: new Date(2025, 9, 26), priority: "high", tags: ["Work"], completed: false },
    { id: 12, title: "Relaxation time", dueDate: new Date(2025, 9, 27), priority: "none", tags: ["Personal"], completed: false },
    { id: 13, title: "Algorithm Tutorial", dueDate: new Date(2025, 9, 24), priority: "mid", tags: ["Study"], completed: false, time: "3:30 PM", classLink: "https://meet.google.com/abc-defg-hij" },
  ];

  // Get all unique tags from tasks
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    allTasks.forEach(task => {
      task.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, []);

  const togglePriority = (priority: Priority) => {
    setSelectedPriorities(prev => 
      prev.includes(priority) 
        ? prev.filter(p => p !== priority)
        : [...prev, priority]
    );
  };

  const toggleTag = (tag: Tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearAllFilters = () => {
    setSelectedPriorities([]);
    setSelectedTags([]);
    setShowLiveClassesOnly(false);
  };
  
  const clearModalFilters = () => {
    setModalSelectedPriorities([]);
    setModalSelectedTags([]);
    setModalShowLiveClassesOnly(false);
  };

  const toggleTaskComplete = (taskId: number) => {
    // In production, update task in database
    console.log("Toggle task", taskId);
  };

  const filteredTasks = useMemo(() => {
    return allTasks.filter(task => {
      // If no priorities selected, show all priorities
      const priorityMatch = selectedPriorities.length === 0 || selectedPriorities.includes(task.priority);
      // If no tags selected, show all tags
      const tagMatch = selectedTags.length === 0 || task.tags.some(tag => selectedTags.includes(tag));
      // If showLiveClassesOnly is true, only show tasks with classLink
      const classLinkMatch = !showLiveClassesOnly || task.classLink;
      return priorityMatch && tagMatch && classLinkMatch;
    });
  }, [selectedPriorities, selectedTags, showLiveClassesOnly]);

  const getCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    if (viewMode === "week") {
      // Get the week containing currentDate
      const startOfWeek = new Date(currentDate);
      const day = startOfWeek.getDay();
      const diff = startOfWeek.getDate() - day;
      startOfWeek.setDate(diff);
      
      const days = [];
      for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        days.push(date);
      }
      return days;
    } else {
      // Month view
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const startDate = new Date(firstDay);
      startDate.setDate(startDate.getDate() - firstDay.getDay());
      
      const days = [];
      let currentDay = new Date(startDate);
      
      // Generate 6 weeks to ensure full month display
      for (let i = 0; i < 42; i++) {
        days.push(new Date(currentDay));
        currentDay.setDate(currentDay.getDate() + 1);
      }
      
      return days;
    }
  };

  const getTasksForDate = (date: Date) => {
    return filteredTasks.filter(task => {
      const taskDate = new Date(task.dueDate);
      return taskDate.toDateString() === date.toDateString();
    });
  };

  const navigateCalendar = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    if (viewMode === "week") {
      newDate.setDate(newDate.getDate() + (direction === "next" ? 7 : -7));
    } else {
      newDate.setMonth(newDate.getMonth() + (direction === "next" ? 1 : -1));
    }
    setCurrentDate(newDate);
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentDate.getMonth();
  };

  const getPriorityColor = (priority: Priority) => {
    switch (priority) {
      case "very-high": return "bg-red-600 text-white";
      case "high": return "bg-destructive/90 text-destructive-foreground";
      case "mid": return "bg-primary/90 text-primary-foreground";
      case "low": return "bg-blue-500/90 text-white";
      case "none": return "bg-muted-foreground/90 text-white";
    }
  };

  const getPriorityLabel = (priority: Priority) => {
    switch (priority) {
      case "very-high": return "Very High";
      case "high": return "High";
      case "mid": return "Mid";
      case "low": return "Low";
      case "none": return "None";
    }
  };

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setIsDialogOpen(true);
  };

  const selectedDateTasks = useMemo(() => {
    if (!selectedDate) return [];
    const tasksForDate = getTasksForDate(selectedDate);
    
    // Apply modal filters
    return tasksForDate.filter(task => {
      const priorityMatch = modalSelectedPriorities.length === 0 || modalSelectedPriorities.includes(task.priority);
      const tagMatch = modalSelectedTags.length === 0 || task.tags.some(tag => modalSelectedTags.includes(tag));
      const classLinkMatch = !modalShowLiveClassesOnly || task.classLink;
      return priorityMatch && tagMatch && classLinkMatch;
    });
  }, [selectedDate, modalSelectedPriorities, modalSelectedTags, modalShowLiveClassesOnly]);

  const calendarDays = getCalendarDays();
  
  // Calculate accurate filter count
  // Show nothing (0) when no filters selected
  // Show count based on how many filter types are active
  const isPriorityFiltered = selectedPriorities.length > 0;
  const isTagFiltered = selectedTags.length > 0;
  const isLiveClassFiltered = showLiveClassesOnly;
  let activeFiltersCount = 0;
  if (isPriorityFiltered) activeFiltersCount++;
  if (isTagFiltered) activeFiltersCount++;
  if (isLiveClassFiltered) activeFiltersCount++;

  return (
    <div className="space-y-6">
      {/* Massive Calendar Card */}
      <Card className="col-span-full">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              Calendar
            </CardTitle>
            
            <div className="flex flex-wrap items-center gap-3">
              {/* View Mode Toggle */}
              <div className="flex gap-1 p-1 bg-muted rounded-lg">
                <Button
                  variant={viewMode === "week" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("week")}
                  className="h-8"
                >
                  Week
                </Button>
                <Button
                  variant={viewMode === "month" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("month")}
                  className="h-8"
                >
                  Month
                </Button>
              </div>

              {/* Combined Filter Dropdown */}
              <DropdownMenu open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <Badge variant="secondary" className="ml-1 h-5 px-1">
                        {activeFiltersCount}
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-56"
                  onCloseAutoFocus={(e) => e.preventDefault()}
                >
                  <DropdownMenuLabel className="text-center">Priority</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {(["very-high", "high", "mid", "low", "none"] as Priority[]).map(priority => (
                    <DropdownMenuCheckboxItem
                      key={priority}
                      checked={selectedPriorities.includes(priority)}
                      onCheckedChange={() => togglePriority(priority)}
                      onSelect={(e) => e.preventDefault()}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getPriorityColor(priority)}`} />
                        {getPriorityLabel(priority)}
                      </div>
                    </DropdownMenuCheckboxItem>
                  ))}
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel className="text-center">Tags</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {allTags.map(tag => (
                    <DropdownMenuCheckboxItem
                      key={tag}
                      checked={selectedTags.includes(tag)}
                      onCheckedChange={() => toggleTag(tag)}
                      onSelect={(e) => e.preventDefault()}
                    >
                      {tag}
                    </DropdownMenuCheckboxItem>
                  ))}
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel className="text-center">Live Classes</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={showLiveClassesOnly}
                    onCheckedChange={() => setShowLiveClassesOnly(!showLiveClassesOnly)}
                    onSelect={(e) => e.preventDefault()}
                  >
                    Show only live classes
                  </DropdownMenuCheckboxItem>
                  
                  <DropdownMenuSeparator />
                  <div className="flex gap-2 p-2" onSelect={(e: Event) => e.preventDefault()}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 h-8"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        clearAllFilters();
                      }}
                    >
                      <X className="h-3 w-3 mr-1" />
                      Clear All
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 h-8"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsFilterOpen(false);
                      }}
                    >
                      <Check className="h-3 w-3 mr-1" />
                      OK
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Calendar Navigation */}
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateCalendar("prev")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h3>
              {currentDate.toLocaleDateString('en-US', { 
                month: 'long', 
                year: 'numeric' 
              })}
            </h3>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateCalendar("next")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Calendar Grid */}
          <div className="space-y-2">
            {/* Day headers */}
            <div className={`grid ${viewMode === "week" ? "grid-cols-7" : "grid-cols-7"} gap-2 mb-2`}>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                <div key={day} className="text-center p-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className={`grid ${viewMode === "week" ? "grid-cols-7" : "grid-cols-7"} gap-2`}>
              {calendarDays.map((date, index) => {
                const tasksForDay = getTasksForDate(date);
                const isTodayDate = isToday(date);
                const isCurrentMonthDate = isCurrentMonth(date);

                return (
                  <div
                    key={index}
                    onClick={() => handleDayClick(date)}
                    className={`
                      p-2 rounded-lg border transition-all flex flex-col cursor-pointer
                      ${viewMode === "month" ? "min-h-[180px]" : "min-h-[300px]"}
                      ${isTodayDate ? 'border-primary border-2 bg-primary/5' : 'border-border'}
                      ${!isCurrentMonthDate && viewMode === "month" ? 'opacity-40' : ''}
                      ${tasksForDay.length > 0 ? 'bg-muted/30 hover:bg-muted/50' : 'hover:bg-muted/20'}
                    `}
                  >
                    <div className={`mb-2 flex-shrink-0 ${isTodayDate ? '' : 'text-muted-foreground'}`}>
                      {date.getDate()}
                    </div>
                    <div className="space-y-1 flex-1 overflow-auto">
                      {tasksForDay.slice(0, viewMode === "month" ? 5 : 10).map(task => (
                        <div
                          key={task.id}
                          className={`text-xs p-1 rounded truncate ${getPriorityColor(task.priority)}`}
                          title={task.title}
                        >
                          {task.title}
                        </div>
                      ))}
                      {tasksForDay.length > (viewMode === "month" ? 5 : 10) && (
                        <div className="text-xs text-muted-foreground">
                          +{tasksForDay.length - (viewMode === "month" ? 5 : 10)} more
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Day Tasks Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5" />
              {selectedDate?.toLocaleDateString('en-US', { 
                weekday: 'long',
                month: 'long', 
                day: 'numeric',
                year: 'numeric' 
              })}
            </DialogTitle>
            <DialogDescription className="flex items-center justify-between flex-wrap gap-2">
              <span>{selectedDateTasks.length} {selectedDateTasks.length === 1 ? 'task' : 'tasks'} scheduled for this day</span>
              
              {/* Modal Filter Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                    {(modalSelectedPriorities.length > 0 || modalSelectedTags.length > 0 || modalShowLiveClassesOnly) && (
                      <Badge variant="secondary" className="ml-1 h-5 px-1">
                        {(modalSelectedPriorities.length > 0 ? 1 : 0) + (modalSelectedTags.length > 0 ? 1 : 0) + (modalShowLiveClassesOnly ? 1 : 0)}
                      </Badge>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56" onCloseAutoFocus={(e) => e.preventDefault()}>
                  <DropdownMenuLabel className="text-center">Priority</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {(["very-high", "high", "mid", "low", "none"] as Priority[]).map(priority => (
                    <DropdownMenuCheckboxItem
                      key={priority}
                      checked={modalSelectedPriorities.includes(priority)}
                      onCheckedChange={() => {
                        setModalSelectedPriorities(prev => 
                          prev.includes(priority) 
                            ? prev.filter(p => p !== priority)
                            : [...prev, priority]
                        );
                      }}
                      onSelect={(e) => e.preventDefault()}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${getPriorityColor(priority)}`} />
                        {getPriorityLabel(priority)}
                      </div>
                    </DropdownMenuCheckboxItem>
                  ))}
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel className="text-center">Tags</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {allTags.map(tag => (
                    <DropdownMenuCheckboxItem
                      key={tag}
                      checked={modalSelectedTags.includes(tag)}
                      onCheckedChange={() => {
                        setModalSelectedTags(prev => 
                          prev.includes(tag) 
                            ? prev.filter(t => t !== tag)
                            : [...prev, tag]
                        );
                      }}
                      onSelect={(e) => e.preventDefault()}
                    >
                      {tag}
                    </DropdownMenuCheckboxItem>
                  ))}
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel className="text-center">Live Classes</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={modalShowLiveClassesOnly}
                    onCheckedChange={() => setModalShowLiveClassesOnly(!modalShowLiveClassesOnly)}
                    onSelect={(e) => e.preventDefault()}
                  >
                    Show only live classes
                  </DropdownMenuCheckboxItem>
                  
                  <DropdownMenuSeparator />
                  <div className="flex gap-2 p-2" onSelect={(e: Event) => e.preventDefault()}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 h-8"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        clearModalFilters();
                      }}
                    >
                      <X className="h-3 w-3 mr-1" />
                      Clear
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 space-y-3">
            {selectedDateTasks.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground">
                <CalendarDays className="h-16 w-16 mx-auto mb-4 opacity-30" />
                <p>No tasks scheduled for this day</p>
              </div>
            ) : (
              selectedDateTasks.map(task => (
                <div key={task.id} className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={() => toggleTaskComplete(task.id)}
                      className="mt-1"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <p className={`flex-1 ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                          {task.title}
                        </p>
                        {task.classLink && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-7 gap-1 shrink-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(task.classLink, '_blank', 'noopener,noreferrer');
                            }}
                          >
                            <ExternalLink className="h-3 w-3" />
                            Join
                          </Button>
                        )}
                      </div>
                      {task.time && (
                        <p className="text-muted-foreground mb-2">
                          {task.time}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-2">
                        <Badge className={getPriorityColor(task.priority)}>
                          {getPriorityLabel(task.priority)}
                        </Badge>
                        {task.tags.map(tag => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                        {task.classLink && (
                          <Badge variant="secondary" className="bg-gradient-primary text-white">
                            Live Class
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
