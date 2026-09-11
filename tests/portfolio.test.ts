import assert from "node:assert/strict";
import test from "node:test";
import { contactLinks, highlights, projects, skillGroups } from "../app/data.ts";

test("portfolio memuat seluruh tujuh tautan proyek publik", () => {
  const links = projects.flatMap((project) => project.links);
  assert.equal(links.length, 7);
  assert.equal(new Set(links.map((link) => link.url)).size, 7);
  assert.ok(links.every((link) => link.url.startsWith("https://")));
});

test("setiap proyek memiliki konten dan teknologi yang dapat ditampilkan", () => {
  assert.ok(projects.length >= 4);
  for (const project of projects) {
    assert.ok(project.title.trim().length > 0);
    assert.ok(project.description.trim().length >= 80);
    assert.ok(project.stack.length >= 3);
  }
});

test("skill portfolio mencakup web dan intelligent systems", () => {
  const skills = skillGroups.flatMap((group) => group.items);
  assert.ok(skills.includes("JavaScript"));
  assert.ok(skills.includes("Machine Learning"));
  assert.ok(skills.includes("OpenCV"));
});

test("kontak publik memuat WhatsApp, email, dan Instagram yang valid", () => {
  assert.equal(contactLinks.length, 3);
  assert.equal(contactLinks.find((item) => item.label === "WhatsApp")?.href, "https://wa.me/6285342614904");
  assert.equal(contactLinks.find((item) => item.label === "Email")?.href, "mailto:imamhudzaifah@gmail.com");
  assert.equal(contactLinks.find((item) => item.label === "Instagram")?.href, "https://www.instagram.com/imamhzf");
});

test("ringkasan pencapaian memiliki data terukur", () => {
  assert.ok(highlights.length >= 4);
  assert.ok(highlights.every((item) => item.value.length > 0 && item.label.length > 0));
});

test("setiap website publik memiliki preview landing page", () => {
  const publicLinks = projects.flatMap((project) => project.links);
  const previews = projects.flatMap((project) => project.previews);
  assert.equal(previews.length, publicLinks.length);
  assert.equal(new Set(previews.map((preview) => preview.src)).size, publicLinks.length);
  assert.ok(previews.every((preview) => preview.src.startsWith("/projects/") && preview.alt.length > 0));
});

test("setiap proyek memiliki media visual atau alur sistem", () => {
  assert.ok(projects.every((project) => project.previews.length > 0 || project.visualSteps.length >= 3));
});
