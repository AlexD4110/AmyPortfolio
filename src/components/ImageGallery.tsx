import * as React from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageGalleryProps {
  images: string[]
  company: string
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, company }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className="relative rounded-lg overflow-hidden border bg-muted cursor-pointer group"
          style={{ height: "100%", width: "100%", aspectRatio: "4 / 3" }}
        >
          <img
            src={images[0]}
            alt={`${company} visual`}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {images.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-background/80 text-foreground px-2 py-1 rounded-md text-sm">
              +{images.length - 1} more
            </div>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{company} Gallery</DialogTitle>
          <DialogDescription>Browse through experience photos</DialogDescription>
        </DialogHeader>
        <div className="relative w-full h-auto">
        <img
            src={images[currentImageIndex]}
            alt={`${company} visual ${currentImageIndex + 1}`}
            className="w-full rounded-lg"
            style={{
                maxWidth: "95%", // Slightly reduces width to add padding around the image
                maxHeight: "85vh", // Limits height so the image doesn’t fill the entire dialog
                objectFit: "cover", // Ensures the image scales appropriately
                objectPosition: "top", // Positions the focus at the top of the image
                margin: "0 auto", // Centers the image horizontally within the dialog
        }}
    />

          {images.length > 1 && (
            <>
              <button
                onClick={previousImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-background/80 hover:bg-background"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-background/80 hover:bg-background"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded-md text-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ImageGallery
