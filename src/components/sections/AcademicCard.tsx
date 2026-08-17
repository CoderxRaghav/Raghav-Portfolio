"use client";

import { AcademicEntry } from "@/types";
import Card from "../ui/Card";

interface Props {
  academic: AcademicEntry;
}

export default function AcademicCard({ academic }: Props) {
  return (
    <Card className="p-8 border-l-4 border-l-accent" glowOnHover>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          {/* Degree */}
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-charcoal mb-2">
            {academic.degree}
          </h3>
          
          {/* Institution */}
          <p className="text-md font-medium text-accent mb-1">
            {academic.institution}
          </p>
          
          {/* Location */}
          <p className="text-sm text-muted">
            {academic.location}
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end text-left md:text-right gap-1.5 shrink-0">
          {/* Period */}
          <span className="px-3.5 py-1 text-xs font-bold tracking-wider uppercase text-charcoal bg-charcoal/5 rounded-full border border-charcoal/10">
            {academic.period}
          </span>
          
          {/* Grade/CGPA if present */}
          {academic.grade !== undefined && (
            <span className="text-sm font-semibold text-accent">
              CGPA: {academic.grade}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
