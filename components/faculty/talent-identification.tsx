"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Award, TrendingUp, Eye } from "lucide-react";
import { mockTalents, type Talent } from "@/lib/mock-data/talents";

interface UniqueTalent {
  student: Talent;
  uniqueSkills: string[];
  score: number;
  category: string;
}

export function TalentIdentification() {
  const [uniqueTalents, setUniqueTalents] = useState<UniqueTalent[]>([]);
  const [selectedTalent, setSelectedTalent] = useState<UniqueTalent | null>(
    null
  );

  useEffect(() => {
    // Calculate unique talents based on rare skills and high performance
    const calculateUniqueTalents = () => {
      const skillFrequency: { [key: string]: number } = {};
      const talents: UniqueTalent[] = [];

      // Count skill frequency across all students
      mockTalents.forEach((talent) => {
        talent.skills.forEach((skill) => {
          skillFrequency[skill] = (skillFrequency[skill] || 0) + 1;
        });
      });

      // Find students with rare skills and high performance
      mockTalents.forEach((talent) => {
        const rareSkills = talent.skills.filter(
          (skill) => skillFrequency[skill] <= 2
        );
        const score =
          talent.cgpa * 10 +
          talent.projects * 2 +
          talent.hackathons * 3 +
          talent.research * 5 +
          rareSkills.length * 5;

        if (rareSkills.length > 0 || score > 100) {
          let category = "High Performer";
          if (rareSkills.length >= 2) category = "Rare Skills";
          else if (talent.research > 1) category = "Research Excellence";
          else if (talent.hackathons > 4) category = "Competition Winner";
          else if (talent.cgpa >= 9.0) category = "Academic Excellence";

          talents.push({
            student: talent,
            uniqueSkills: rareSkills,
            score: Math.round(score),
            category,
          });
        }
      });

      // Sort by score and take top 6
      return talents.sort((a, b) => b.score - a.score).slice(0, 6);
    };

    setUniqueTalents(calculateUniqueTalents());
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Rare Skills":
        return <Sparkles className="w-4 h-4" />;
      case "Research Excellence":
        return <Award className="w-4 h-4" />;
      case "Competition Winner":
        return <TrendingUp className="w-4 h-4" />;
      case "Academic Excellence":
        return <Star className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Rare Skills":
        return "bg-purple-100 text-purple-800 border-purple-200";
      case "Research Excellence":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Competition Winner":
        return "bg-green-100 text-green-800 border-green-200";
      case "Academic Excellence":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-4">
      <Card className="border-2 border-black bg-black text-white">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-white">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            Unique Talent Identification
          </CardTitle>
          <p className="text-gray-300 text-sm">
            Students with exceptional skills and achievements
          </p>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {uniqueTalents.map((talent, index) => (
              <div
                key={talent.student.id}
                className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors cursor-pointer"
                onClick={() => setSelectedTalent(talent)}
              >
                <div className="flex items-start gap-3 mb-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={talent.student.profileImage} />
                    <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-orange-500 text-black font-bold">
                      {talent.student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white truncate">
                      {talent.student.name}
                    </h4>
                    <p className="text-gray-400 text-xs">
                      {talent.student.usn}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      {getCategoryIcon(talent.category)}
                      <span className="text-xs text-gray-300">
                        {talent.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-yellow-400 font-bold text-sm">
                      {talent.score}
                    </div>
                    <div className="text-gray-400 text-xs">Score</div>
                  </div>
                </div>

                {talent.uniqueSkills.length > 0 && (
                  <div className="mb-3">
                    <p className="text-gray-400 text-xs mb-1">Rare Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {talent.uniqueSkills
                        .slice(0, 2)
                        .map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            variant="secondary"
                            className="bg-purple-900 text-purple-200 text-xs px-2 py-0.5"
                          >
                            {skill}
                          </Badge>
                        ))}
                      {talent.uniqueSkills.length > 2 && (
                        <Badge
                          variant="secondary"
                          className="bg-gray-700 text-gray-300 text-xs px-2 py-0.5"
                        >
                          +{talent.uniqueSkills.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>CGPA: {talent.student.cgpa}</span>
                  <span>Projects: {talent.student.projects}</span>
                  <span>Hackathons: {talent.student.hackathons}</span>
                </div>
              </div>
            ))}
          </div>

          {uniqueTalents.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No unique talents identified yet</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Talent Detail Modal */}
      {selectedTalent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl bg-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  {getCategoryIcon(selectedTalent.category)}
                  {selectedTalent.student.name} - {selectedTalent.category}
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedTalent(null)}
                >
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={selectedTalent.student.profileImage} />
                  <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">
                    {selectedTalent.student.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">
                    {selectedTalent.student.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedTalent.student.usn}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {selectedTalent.student.department}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-2xl font-bold text-primary">
                    {selectedTalent.score}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Talent Score
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">
                    {selectedTalent.student.cgpa}
                  </div>
                  <div className="text-xs text-blue-600">CGPA</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-lg font-bold text-green-600">
                    {selectedTalent.student.projects}
                  </div>
                  <div className="text-xs text-green-600">Projects</div>
                </div>
                <div className="text-center p-3 bg-purple-50 rounded-lg">
                  <div className="text-lg font-bold text-purple-600">
                    {selectedTalent.student.hackathons}
                  </div>
                  <div className="text-xs text-purple-600">Hackathons</div>
                </div>
                <div className="text-center p-3 bg-orange-50 rounded-lg">
                  <div className="text-lg font-bold text-orange-600">
                    {selectedTalent.student.research}
                  </div>
                  <div className="text-xs text-orange-600">Research</div>
                </div>
              </div>

              {selectedTalent.uniqueSkills.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Rare Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTalent.uniqueSkills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-purple-100 text-purple-800"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-semibold mb-2">All Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTalent.student.skills.map((skill, index) => (
                    <Badge key={index} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Achievements</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {selectedTalent.student.achievements.map(
                    (achievement, index) => (
                      <li key={index}>{achievement}</li>
                    )
                  )}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
