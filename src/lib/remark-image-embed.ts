import { visit } from "unist-util-visit";
import type { Root, Paragraph, Link, Text, Parent, Literal } from "mdast";

interface HTMLNode extends Literal {
  type: "html";
  value: string;
}

const remarkImageEmbed = () => {
  return (tree: Root) => {

    visit(tree, (node) => {
      const parent = node as Parent;
      if (!parent || !Array.isArray(parent.children)) return;

      let i = 0;
      while (i < parent.children.length) {

        const run: { url: string }[] = [];
        let j = i;

        while (
          j < parent.children.length &&
          isImageParagraph(parent.children[j] as any)
        ) {
          const url = extractUrlFromParagraph(parent.children[j] as Paragraph)!;
          run.push({ url: makeDriveDirectUrl(url) });
          j++;
        }

        if (run.length > 0) {

          const html = `
            <div class="image-gallery image-gallery--${run.length}">
              ${run
                .map(
                  (img) => `
                <div class="image-embed">
                  <img src="${escapeHtml(img.url)}" alt="Embedded image" />
                </div>`
                )
                .join("")}
            </div>
          `;

          const embedNode: HTMLNode = { type: "html", value: html.trim() };

          (parent.children as any).splice(i, j - i, embedNode);

          i += 1;
        } else {
          i += 1;
        }
      }
    });
  };
};

function isImageParagraph(n: any): n is Paragraph {
  if (!n || n.type !== "paragraph" || !Array.isArray(n.children)) return false;
  if (n.children.length !== 1) return false;
  const c = n.children[0];
  if (c.type !== "link" && c.type !== "text") return false;

  const url = c.type === "link" ? (c as Link).url : (c as Text).value;
  if (!url || typeof url !== "string") return false;

  const isImageExt = /\.(jpe?g|png|gif|webp|avif)$/i.test(url);
  const isDrive =
    /drive\.google\.com/.test(url) || /drive\.googleusercontent\.com/.test(url);

  return isImageExt || isDrive;
}

function extractUrlFromParagraph(n: Paragraph): string | null {
  if (!n.children?.[0]) return null;
  const c = n.children[0] as Link | Text;
  return c.type === "link" ? c.url : c.value;
}

function makeDriveDirectUrl(url: string) {
  const m =
    url.match(/\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (m) return `https://drive.google.com/uc?export=view&id=${m[1]}`;
  return url;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default remarkImageEmbed;