import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Client-side PDF generator using dynamic import to avoid SSR issues
export async function generateAndDownloadPdf(title: string, sections: Array<{ heading: string; lines: string[] }>, fileName: string) {
  if (typeof window === 'undefined') return

  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF()

  const left = 14
  let y = 20

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.text(title, left, y)
  y += 10

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(11)
  const dateLine = `Generated: ${new Date().toLocaleString()}`
  doc.text(dateLine, left, y)
  y += 10

  sections.forEach((section, i) => {
    if (i > 0) {
      y += 4
    }
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(13)
    doc.text(section.heading, left, y)
    y += 6
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(11)
    section.lines.forEach((line) => {
      const split = doc.splitTextToSize(line, 180)
      split.forEach((l: string) => {
        if (y > 280) {
          doc.addPage()
          y = 20
        }
        doc.text(l, left, y)
        y += 6
      })
    })
  })

  doc.save(fileName.endsWith('.pdf') ? fileName : `${fileName}.pdf`)
}
