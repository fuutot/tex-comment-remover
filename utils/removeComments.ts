export function removeComments(texSource: string): string {
  // `%` で始まる行を完全に削除（改行も含めて）
  const singleLineCommentRemoved = texSource.replace(/^%.*\n?/gm, "");

  // `\begin{comment}` と `\end{comment}` の間を削除
  const multiLineCommentRemoved = singleLineCommentRemoved.replace(
    /\\begin\{comment\}[\s\S]*?\\end\{comment\}\n?/gm,
    "",
  );
  return multiLineCommentRemoved;
}
