import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award } from "lucide-react"
import Image from "next/image"

interface CertificateCardProps {
  title: string
  organization: string
  date: string
  imageUrl: string
  credentialUrl: string
}

export function CertificateCard({ title, organization, date, imageUrl, credentialUrl }: CertificateCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative">
      <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <CardHeader className="flex flex-row items-center gap-4 pb-2 relative">
        <div className="h-16 w-16 relative flex-shrink-0 overflow-hidden rounded-full border border-muted p-1 group-hover:border-primary/20 transition-colors duration-300">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={organization}
            fill
            className="object-contain p-1 group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div>
          <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">{title}</h3>
          <p className="text-sm text-muted-foreground">{organization}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Award className="h-4 w-4 text-primary/70" />
          <p className="text-sm text-muted-foreground">Issued: {date}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300"
        >
          <a href={credentialUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" /> Verify Credential
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

