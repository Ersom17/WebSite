
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
    src: "public/Imagine 1 .jpg",
    alt: "Abbigliamento vintage unisex con camicie colorate, giacche retrò e pantaloni su grucce in un negozio second hand.",
    title: "Camicie, Giacche e Maglie Vintage da Uomo e Donna",
    description: "Selezione colorata di capi vintage casual e sartoriali."
  },
  {
    src: "public/Imagine 3 .jpg",
    alt: "Foulard vintage colorati in seta e cotone annodati in esposizione, disponibili a 4 CHF ciascuno in negozio second hand.",
    title: " Foulard Vintage in Seta, Cotone e Fantasie Colorate",
    description: "Foulard unici annodati"
  },
  {
    src: "public/Imagine 4 .jpg",
    alt: "Vetrina con orecchini e accessori vintage esposti su tessuto scuro, con cartellini dei prezzi visibili bassi. Varietà di stili: pendenti, etnici, dorati, in legno e con pietre.",
    title: "Orecchini e Bijoux Vintage",
    description: "Accessori originali in metallo, legno e perline."
  },
  {
    src: "public/Imagine 5 .jpg",
    alt: "Vestiti vintage da donna su stand con giacche, abiti e costumi in esposizione in un negozio second hand eco-friendly.",
    title: "Vestiti e Giacche Donna Vintage – Sconti e Occasioni",
    description: "Capi eleganti e casual a partire da 5 CHF."
  },
  {
    src: "public/Imagine 6 .jpg",
    alt: "Tavolo moderno con sedie nere circondato da quadri, ceramiche e oggetti vintage in esposizione in negozio d’antiquariato.",
    title: "Tavolo Moderno e Arredi Vintage con Quadri d’Arte",
    description: "Arredo misto tra design moderno e arte classica."
  },
  {
    src: "public/Imagine 67.jpg",
    alt: " Poltrone vintage in velluto con borsa in paglia decorata, circondate da quadri d’arte e arredamento retrò in negozio di seconda mano.",
    title: "Poltrone in Velluto e Borsa in Paglia Decorata",
    description: "Arredo vintage elegante con borsa etnica."
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
