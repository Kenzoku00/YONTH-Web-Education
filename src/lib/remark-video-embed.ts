import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Paragraph, Link, Text, Root } from "mdast";

const remarkVideoEmbed: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, "paragraph", (node: Paragraph, index, parent) => {
      if (!parent || typeof index !== "number") return;

      if (
        node.children.length === 1 &&
        (node.children[0].type === "link" || node.children[0].type === "text")
      ) {
        const child = node.children[0] as Link | Text;
        const url = child.type === "link" ? child.url : child.value;

        if (!url || typeof url !== "string") return;

        let embedNode: any = null;

        if (url.includes("youtube.com") || url.includes("youtu.be")) {
          const embedUrl = url
            .replace("watch?v=", "embed/")
            .replace("youtu.be/", "www.youtube.com/embed/");
          embedNode = {
            type: "html",
            value: `<div class="video-embed"><iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe></div>`,
          };
        } else if (url.includes("vimeo.com")) {
          const embedUrl = url.replace("vimeo.com", "player.vimeo.com/video");
          embedNode = {
            type: "html",
            value: `<div class="video-embed"><iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe></div>`,
          };
        } else if (url.endsWith(".mp4")) {
          embedNode = {
            type: "html",
            value: `<div class="video-embed"><video controls src="${url}"></video></div>`,
          };
        }

        if (embedNode) {
          parent.children.splice(index, 1, embedNode);
        }
      }
    });
  };
};

export default remarkVideoEmbed;
