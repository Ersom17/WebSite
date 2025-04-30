
import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  HoverCard, 
  HoverCardContent, 
  HoverCardTrigger 
} from "@/components/ui/hover-card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { GalleryHorizontal, ZoomIn } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1567538096621-38d2284b23ff",
    alt: "Vintage furniture in store",
    title: "Angolo Salotto",
    description: "Mobili restaurati degli anni '50 perfetti per il tuo salotto."
  },
  {
    src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    alt: "A living room with antique furniture",
    title: "Collezione Classica",
    description: "Pezzi unici dal fascino senza tempo."
  },
  {
    src: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8",
    alt: "Vintage cabinet with decorative items",
    title: "Oggettistica",
    description: "Complementi d'arredo che raccontano una storia."
  },
  {
    src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    alt: "Vintage decorative items",
    title: "Ceramiche Antiche",
    description: "Arte e tradizione in pezzi unici selezionati."
  },
  {
    src: "https://images.unsplash.com/photo-1577722422764-76f8cba3344e",
    alt: "Antique furniture with books",
    title: "Libreria Vintage",
    description: "Scaffali e librerie dal fascino retrò."
  },
  {
    src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2",
    alt: "Vintage desk and chair",
    title: "Spazio Lavoro",
    description: "Arredi per ufficio dallo stile ricercato."
  }
];

const Gallery = () => {
  const [,setSelectedImageIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-vintage-50 relative">
      <div className="absolute inset-0 -z-10 pattern-paper opacity-10"></div>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-background mb-4">
            <GalleryHorizontal className="mr-2 h-4 w-4" />
            <span className="text-vintage-600">La nostra galleria</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Esplora il Nostro Negozio
          </h2>
          <p className="text-muted-foreground">
            Scopri la nostra selezione di mobili e oggetti vintage. Passa il mouse sopra per dettagli o clicca per una vista migliore.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up" data-aos-delay="100">
          {galleryImages.map((image, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Dialog>
                  <DialogTrigger asChild>
                    <div 
                      className="relative rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group h-80"
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img 
                        src={`${image.src}?auto=format&fit=crop&q=80&w=800&h=1000`}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomIn className="text-white h-8 w-8" />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl w-full p-0 bg-black/80 border-vintage-200">
                    <Carousel className="w-full">
                      <CarouselContent>
                        <CarouselItem>
                          <div className="relative aspect-[3/2] md:aspect-[16/9]">
                            <img 
                              src={`${image.src}?auto=format&fit=crop&q=90&w=1600`}
                              alt={image.alt}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="p-6 bg-black/70 text-white">
                            <h3 className="text-xl font-serif">{image.title}</h3>
                            <p className="text-white/80">{image.description}</p>
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious className="left-2 bg-black/50 hover:bg-black/70 border-0 text-white" />
                      <CarouselNext className="right-2 bg-black/50 hover:bg-black/70 border-0 text-white" />
                    </Carousel>
                  </DialogContent>
                </Dialog>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-white/95 backdrop-blur border-vintage-200">
                <div className="space-y-2">
                  <h4 className="text-lg font-serif text-vintage-800">{image.title}</h4>
                  <p className="text-sm text-muted-foreground">{image.description}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
