import { removeComments } from "@/utils/removeComments";
import * as fs from "fs";
import * as path from "path";

describe("removeComments", () => {
  const fixturesDir = path.join(__dirname, "fixtures");
  const inputDir = path.join(fixturesDir, "input");
  const expectedDir = path.join(fixturesDir, "expected");

  it("基本的な%コメントを削除する", () => {
    const input = fs.readFileSync(
      path.join(inputDir, "basic-comments.tex"),
      "utf-8",
    );
    const expected = fs.readFileSync(
      path.join(expectedDir, "basic-comments.tex"),
      "utf-8",
    );
    expect(removeComments(input)).toBe(expected);
  });

  it("\\begin{comment}と\\end{comment}の間を削除する", () => {
    const input = fs.readFileSync(
      path.join(inputDir, "multiline-comments.tex"),
      "utf-8",
    );
    const expected = fs.readFileSync(
      path.join(expectedDir, "multiline-comments.tex"),
      "utf-8",
    );
    expect(removeComments(input)).toBe(expected);
  });

  it("単一行と複数行のコメントが混在する場合に正しく削除する", () => {
    const input = fs.readFileSync(
      path.join(inputDir, "mixed-comments.tex"),
      "utf-8",
    );
    const expected = fs.readFileSync(
      path.join(expectedDir, "mixed-comments.tex"),
      "utf-8",
    );
    expect(removeComments(input)).toBe(expected);
  });

  it("コメントがない場合はそのまま返す", () => {
    const input = fs.readFileSync(
      path.join(inputDir, "no-comments.tex"),
      "utf-8",
    );
    const expected = fs.readFileSync(
      path.join(expectedDir, "no-comments.tex"),
      "utf-8",
    );
    expect(removeComments(input)).toBe(expected);
  });
});
