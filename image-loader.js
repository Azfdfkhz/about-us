// Menambahkan basePath (/about-us) ke semua gambar lokal di GitHub Pages.
export default function imageLoader({ src }) {
  if (/^https?:\/\//.test(src)) return src;
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${src}`;
}
