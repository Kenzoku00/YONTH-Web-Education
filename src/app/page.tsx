import { fetchPublishedPosts, getPost, Post } from "@/lib/notion";
import PostCard from "@/components/post-card";
import LogoGrid from "@/components/logo-grid";

async function getPosts(): Promise<Post[]> {
  const posts = await fetchPublishedPosts();
  const allPosts = await Promise.all(
    posts.results.map((post) => getPost(post.id))
  );
  return allPosts.filter((post): post is Post => post !== null);
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div>
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
          SinBar-GrafTIK
        </h1>
        <p className="text-lg text-muted-foreground">
          Sinau Bareng Grafika Teknologi Informasi dan Komunikasi
        </p>
      </div>

      <LogoGrid/>

      <section className="flex flex-col md:flex-row items-center gap-8 my-12 max-w-5xl mx-auto px-4">
        <div className="md:w-1/2">
          <img
            src="/guru.png"
            alt="Guru Mengajar"
            className="rounded-xl shadow-md w-auto h-50 object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4">Selamat Datang</h3>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Pembuatan Website ini bertujuan agar pembelajaran melalui materi
            jauh lebih mudah tanpa harus tatap muka dan bertemu langsung.
            Dengan adanya website ini, siswa dapat belajar secara mandiri dan interaktif.
          </p>
        </div>
      </section>

      <div className="max-w-2xl mx-auto text-center mb-12 mt-24">
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
          Materi
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
