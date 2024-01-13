import { useRouter } from "next/router";
import { AiOutlineFilePdf } from "react-icons/ai";

const samples = [
  {
    type: "journal/article",
    title:
      "Contribution Of Islamic Law To Legal Development In Indonesia (2022-12-26)",
    abstract:
      "Sistem hukum yang dipergunakan di Indonesia adalah sistem hukum civil law, yaitu sistem hukum kodifikasi atau tertulis. Kontribusi hukum islam di indonesia dilakukan pembangunan, pembinaan dan penerapan hukum Islam sebagai hukum positip dalam rang...",
    writer: "Achmad Sodiki",
    publisher: "Jurnal Hukum Islam",
    year: "2017",
    link: "https://ejournal.unida.gontor.ac.id/index.php/jhi/article/view/1125",
  },
  {
    type: "journal/article",
    title:
      "Perbandingan konsep dan sumber hukum: antara hukum islam dan hukum positif (2004)",
    abstract:
      "Intisari Artikel ini membahas tentang konsep dan sumber hukum Islam dan hukum positif. Pembahasannya merupakan ranah filsafat hukum, yang mengkaji hukum dari segi hakikatnya. Metode yang digunakan adalah metode komparatif, yaitu dengan memban...",
    writer: "i-lib Perpustakaan UGM",
    publisher: "i-lib UGM",
    year: "2004",
    link: "http://etd.repository.ugm.ac.id/index.php?mod=penelitian_detail&sub=PenelitianDetail&act=view&typ=html&buku_id=10640",
  },
  {
    type: "journal/article",
    title:
      "SYARI’AT ISLAM DAN HUKUM NASIONAL (Problematika Transformasi dan Integrasi Hukum Islam Kedalam Hukum Nasional) (2009))",
    abstract:
      "Abstract Banyak tantangan yang dihadapi umat Islam dalam upayanya melakukan transformasi dan Integrasi Hukum Islam kedalam Hukum Nasional.Untuk bisa melakukan transformasi, umat Islam di Indonesia mesti terus menerus mengembangkan model-...",
    writer: "Nurrohman Nurrohman Syarif",
    publisher: "Jurnal Hukum Islam",
    year: "2009",
    link: "https://ejournal.unida.gontor.ac.id/index.php/jhi/article/view/1125",
  },
  {
    type: "journal/article",
    title:
      "Pengaruh Hukum Islam Terhadap Hukum Nasional (Studi Kasus: Pengaruh Hukum Islam Terhadap Hukum Perkawinan Di Indonesia) (2018)",
    abstract:
      "Hukum Islam merupakan salah satu sumber hukum nasional di Indonesia. Hukum Islam di Indonesia merupakan hukum yang bersumber dari Al-Qur’an dan Hadist. Hukum Islam di Indonesia juga merupakan hukum yang bersifat positif. Hukum Islam di Indon...",
    writer: "Rizky Nurul Hidayati",
    publisher: "Jurnal Hukum Islam",
    year: "2018",
    link: "https://ejournal.unida.gontor.ac.id/index.php/jhi/article/view/1125",
  },
];

const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <div className="w-screen">
      <div className="flex w-full gap-5">
        <div className="w-[60%] px-4 py-6">
          <h3 className="text-2xl">
            Knowlegde map of <b>{q}</b>
          </h3>
        </div>
        <div className="w-[40%] h-screen flex flex-col overflow-hidden border-l border-l-gray-300">
          <div className="w-full text-center bg-gray-100 p-4">
            Overview (200 documents)
          </div>
          <div className="w-full h-full overflow-y-auto flex flex-col">
            {samples.map((sample, index) => (
              <div
                key={`items-${index}`}
                className="flex flex-col gap-2 items-start border-b border-b-gray-300 p-4"
              >
                <div className="text-xs bg-gray-100 inline-block py-1 px-5 rounded-full">
                  {sample.type}
                </div>
                <h2 className="text-lg">{sample.title}</h2>
                <p className="text-sm">{sample.writer}</p>
                <p className="text-xs text-gray-400">
                  {sample.publisher} {sample.year}
                </p>
                <p className="text-xs">
                  [link]:{" "}
                  <a href="#" className="underline">
                    {sample.link}
                  </a>
                </p>
                <p className="text-sm ">{sample.abstract}</p>
                <a className="btn btn-primary btn-sm">
                  <AiOutlineFilePdf />
                  PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
