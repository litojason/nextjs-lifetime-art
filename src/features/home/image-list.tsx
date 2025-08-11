import ImageCard from "@/components/image-card";
import data from "@/data/image-list-data.json";

const { images } = data;

export default function ImageList() {
  return (
    <div className="flex gap-8 overflow-x-auto">
      {images.map((item) => (
        <ImageCard key={item.name} data={item} />
      ))}
    </div>
  );
}
