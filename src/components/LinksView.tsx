import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { ExternalLink, Plus, Trash2, Star, X } from "lucide-react";

interface Link {
  id: number;
  title: string;
  url: string;
  categories: string[]; // Changed to array for multiple categories
  favorite: boolean;
}

export function LinksView() {
  const [links, setLinks] = useState<Link[]>([
    { id: 1, title: "React Documentation", url: "https://react.dev", categories: ["Development"], favorite: true },
    { id: 2, title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs", categories: ["Development"], favorite: true },
    { id: 3, title: "Tailwind CSS", url: "https://tailwindcss.com", categories: ["Design", "Development"], favorite: false },
    { id: 4, title: "MDN Web Docs", url: "https://developer.mozilla.org", categories: ["Development"], favorite: true },
    { id: 5, title: "GitHub", url: "https://github.com", categories: ["Tools"], favorite: false },
    { id: 6, title: "Stack Overflow", url: "https://stackoverflow.com", categories: ["Community"], favorite: false },
    { id: 7, title: "Figma", url: "https://figma.com", categories: ["Design"], favorite: true },
    { id: 8, title: "Notion", url: "https://notion.so", categories: ["Productivity"], favorite: false },
  ]);

  const [newLinkTitle, setNewLinkTitle] = useState("");
  const [newLinkUrl, setNewLinkUrl] = useState("");
  const [newLinkCategory, setNewLinkCategory] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleFavorite = (id: number) => {
    setLinks(links.map(link => 
      link.id === id ? { ...link, favorite: !link.favorite } : link
    ));
  };

  const deleteLink = (id: number) => {
    setLinks(links.filter(link => link.id !== id));
  };

  // Get all unique categories from existing links
  const existingCategories = Array.from(
    new Set(links.flatMap(link => link.categories))
  ).sort();

  const toggleCategorySelection = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const removeSelectedCategory = (category: string) => {
    setSelectedCategories(prev => prev.filter(c => c !== category));
  };

  const addLink = () => {
    if (!newLinkTitle.trim() || !newLinkUrl.trim()) {
      alert("Please fill in title and URL");
      return;
    }

    // Combine selected existing categories with new category (if provided)
    let finalCategories = [...selectedCategories];
    
    if (newLinkCategory.trim()) {
      // Add the typed category if it doesn't already exist in the selection
      const trimmedNewCategory = newLinkCategory.trim();
      if (!finalCategories.includes(trimmedNewCategory)) {
        finalCategories.push(trimmedNewCategory);
      }
    }

    // If no categories selected at all, default to "Uncategorized"
    if (finalCategories.length === 0) {
      finalCategories = ["Uncategorized"];
    }

    const newLink: Link = {
      id: Math.max(0, ...links.map(l => l.id)) + 1,
      title: newLinkTitle,
      url: newLinkUrl,
      categories: finalCategories,
      favorite: false,
    };

    setLinks([...links, newLink]);
    
    // Reset form
    setNewLinkTitle("");
    setNewLinkUrl("");
    setNewLinkCategory("");
    setSelectedCategories([]);
  };

  const favoriteLinks = links.filter(link => link.favorite);

  // Group links by category (a link can appear in multiple categories)
  const linksByCategory: { [key: string]: Link[] } = {};
  links.forEach(link => {
    link.categories.forEach(category => {
      if (!linksByCategory[category]) {
        linksByCategory[category] = [];
      }
      linksByCategory[category].push(link);
    });
  });

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add New Link</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="link-title">Title</Label>
              <Input 
                id="link-title"
                placeholder="Link title..."
                value={newLinkTitle}
                onChange={(e) => setNewLinkTitle(e.target.value)}
              />
            </div>
            
            <div>
              <Label htmlFor="link-url">URL</Label>
              <Input 
                id="link-url"
                placeholder="https://..."
                value={newLinkUrl}
                onChange={(e) => setNewLinkUrl(e.target.value)}
              />
            </div>

            {/* Existing Categories Selection */}
            {existingCategories.length > 0 && (
              <div className="space-y-2">
                <Label>Select Existing Categories</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-3 border rounded-lg max-h-[200px] overflow-y-auto">
                  {existingCategories.map(category => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => toggleCategorySelection(category)}
                      />
                      <label
                        htmlFor={`category-${category}`}
                        className="cursor-pointer flex-1"
                      >
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Selected Categories Display */}
            {selectedCategories.length > 0 && (
              <div className="space-y-2">
                <Label>Selected Categories</Label>
                <div className="flex flex-wrap gap-2">
                  {selectedCategories.map(category => (
                    <Badge key={category} variant="secondary" className="gap-1">
                      {category}
                      <button
                        onClick={() => removeSelectedCategory(category)}
                        className="ml-1 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* New Category Input */}
            <div>
              <Label htmlFor="new-category">Or Add New Category</Label>
              <Input 
                id="new-category"
                placeholder="Type new category name..."
                value={newLinkCategory}
                onChange={(e) => setNewLinkCategory(e.target.value)}
              />
            </div>

            <Button onClick={addLink} className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Add Link
            </Button>
          </div>
        </CardContent>
      </Card>

      {favoriteLinks.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-current" />
              Favorites
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {favoriteLinks.map((link) => (
                <div
                  key={link.id}
                  className="p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="flex-1">{link.title}</p>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleFavorite(link.id)}
                      >
                        <Star className={`h-4 w-4 ${link.favorite ? 'fill-current' : ''}`} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteLink(link.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {link.categories.map(category => (
                      <Badge key={category} variant="secondary">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="h-3 w-3" />
                    <span className="truncate">{link.url}</span>
                  </a>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {Object.keys(linksByCategory).sort().map((category) => {
        const categoryLinks = linksByCategory[category];
        return (
          <Card key={category}>
            <CardHeader>
              <CardTitle>{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {categoryLinks.map((link) => (
                  <div
                    key={link.id}
                    className="p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="flex-1">{link.title}</p>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleFavorite(link.id)}
                        >
                          <Star className={`h-4 w-4 ${link.favorite ? 'fill-current' : ''}`} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => deleteLink(link.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {link.categories.length > 1 && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {link.categories.filter(c => c !== category).map(cat => (
                          <Badge key={cat} variant="outline">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    )}
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span className="truncate">{link.url}</span>
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
