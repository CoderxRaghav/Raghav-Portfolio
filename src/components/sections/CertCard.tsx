"use client";

import { Certification } from "@/types";
import Card from "../ui/Card";

interface Props {
  certification: Certification;
}

export default function CertCard({ certification }: Props) {
  return (
    <a
      href={certification.pdfPath}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <Card className="p-6 flex items-center justify-between gap-4" glowOnHover>
        <div className="flex items-center gap-5">
          {/* Certificate Thumbnail Preview Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-accent-light border border-accent/15 flex items-center justify-center shrink-0 relative">
            {certification.thumbnail ? (
              <img 
                src={certification.thumbnail} 
                alt={certification.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-accent group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.375c.9 0 1.625-.725 1.625-1.625V13.5c0-.9-.725-1.625-1.625-1.625H9m1.5-4.875L18 10.5m-7.5-6-7.5 6m7.5-6v16.5m0-16.5L12 3m0 0h-.008v.008H12V3zm0 0v16.5"
                />
              </svg>
            )}
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-charcoal group-hover:text-accent transition-colors">
              {certification.title}
            </h3>
            <p className="text-sm sm:text-base text-muted font-medium mt-1">
              {certification.issuer}
            </p>
          </div>
        </div>

        {/* Right chevron arrow */}
        <div className="text-muted/40 group-hover:text-accent group-hover:translate-x-1 transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </Card>
    </a>
  );
}
