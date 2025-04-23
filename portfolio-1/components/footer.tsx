export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">&copy; {currentYear} John Doe. All rights reserved.</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Designed and built with passion</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

