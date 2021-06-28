const makeDoc = async (path, fn) => {
  const fn2 = fn.substring(0, fn.length - 2) + "docx";
  console.log(fn, "->", fn2);
  const p = Deno.run({ cmd: ["pandoc", path + fn, "-o", path + "docx/" + fn2] });
  await p.status();
  p.close();
};

for await (const f of Deno.readDir("../")) {
  if (!f.isFile || !f.name.endsWith(".md")) {
    continue;
  }
  await makeDoc("../", f.name);
}
