const i = (o, n, $ = {}) => {
  const s = n ? `${o}__${n}` : o, t = [s];
  for (const [r, e] of Object.entries($))
    typeof e == "string" ? t.push(`${s}_${r}-${e}`) : e === !0 && t.push(`${s}_${r}`);
  return t.join(" ");
};
export {
  i as bem
};
