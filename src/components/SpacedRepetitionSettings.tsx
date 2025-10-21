import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Badge } from "./ui/badge";
import { Save, RotateCcw } from "lucide-react";
import { useSpacedRepetition } from "./SpacedRepetitionContext";
import { toast } from "sonner";

export function SpacedRepetitionSettings() {
  const { numRepetitions, dayGaps, setNumRepetitions, setDayGaps } = useSpacedRepetition();

  const handleNumRepetitionsChange = (value: number[]) => {
    const newNum = value[0];
    setNumRepetitions(newNum);
    
    // Adjust dayGaps array to match new number of repetitions
    if (newNum > dayGaps.length) {
      const newGaps = [...dayGaps];
      for (let i = dayGaps.length; i < newNum; i++) {
        newGaps.push((i + 1) * 7); // Default pattern: add 7 days
      }
      setDayGaps(newGaps);
    } else if (newNum < dayGaps.length) {
      setDayGaps(dayGaps.slice(0, newNum));
    }
  };

  const handleGapChange = (index: number, value: string) => {
    const newValue = parseInt(value) || 0;
    const newGaps = [...dayGaps];
    newGaps[index] = newValue;
    setDayGaps(newGaps);
  };

  const resetToDefaults = () => {
    setNumRepetitions(5);
    setDayGaps([1, 3, 7, 14, 30]);
  };

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  const getTotalDays = () => {
    return dayGaps.reduce((sum, gap) => sum + gap, 0);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Spaced Repetition Configuration</CardTitle>
          <CardDescription>
            Configure how many times you want to review material and the gaps between each repetition
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Number of Repetitions */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="num-repetitions">Number of Repetitions</Label>
              <Badge variant="default">{numRepetitions} reviews</Badge>
            </div>
            <Slider
              id="num-repetitions"
              min={2}
              max={10}
              step={1}
              value={[numRepetitions]}
              onValueChange={handleNumRepetitionsChange}
              className="w-full"
            />
            <p className="text-muted-foreground">
              Total review period: {getTotalDays()} days
            </p>
          </div>

          {/* Gap Configuration */}
          <div className="space-y-4">
            <Label>Days Between Each Repetition</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dayGaps.map((gap, index) => (
                <div key={index} className="space-y-2">
                  <Label htmlFor={`gap-${index}`}>
                    Repetition {index + 1} → {index + 2}
                  </Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id={`gap-${index}`}
                      type="number"
                      min={0}
                      max={365}
                      value={gap}
                      onChange={(e) => handleGapChange(index, e.target.value)}
                      className="flex-1"
                    />
                    <span className="text-muted-foreground">days</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button onClick={handleSave} className="flex-1 md:flex-none">
              <Save className="mr-2 h-4 w-4" />
              Save Settings
            </Button>
            <Button onClick={resetToDefaults} variant="outline">
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset to Defaults
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Preview Card */}
      <Card>
        <CardHeader>
          <CardTitle>Review Schedule Preview</CardTitle>
          <CardDescription>
            Based on your current settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <Badge variant="default">Day 0</Badge>
              <span>Initial Learning</span>
            </div>
            {dayGaps.map((gap, index) => {
              const cumulativeDays = dayGaps.slice(0, index + 1).reduce((sum, g) => sum + g, 0);
              return (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Badge variant="secondary">Day {cumulativeDays}</Badge>
                  <span>Review {index + 1}</span>
                  <span className="text-muted-foreground ml-auto">
                    (+{gap} days)
                  </span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Information Card */}
      <Card>
        <CardHeader>
          <CardTitle>About Spaced Repetition</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-muted-foreground">
            Spaced repetition is a learning technique that involves reviewing material at increasing intervals.
            This method helps improve long-term retention by taking advantage of the psychological spacing effect.
          </p>
          <div className="space-y-2">
            <h4>Common Patterns:</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li><strong>SuperMemo SM-2:</strong> 1, 6, then increasing intervals</li>
              <li><strong>Leitner System:</strong> 1, 3, 7, 14, 30 days</li>
              <li><strong>Aggressive:</strong> 1, 2, 4, 8, 16 days (exponential)</li>
              <li><strong>Conservative:</strong> 1, 3, 7, 21, 60 days</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
