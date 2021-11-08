/**
 * The goal of this function is to replace
 * parts of a string with jsx tagged strings.
 * The inputs are the string, the query which
 * you want to replace, and the class name which you
 * want to assign to the span tag.
 * FUTURE aim: take in node tag so <span> can
 * be whatever you want.
 */

function replaceStringReact(string: string, query: string, className: string) {
  const regexp: RegExp = new RegExp("("+query+")", "gi");
  const parts: React.ReactNode[] = string.split(regexp);

  for (let i = 1; i < parts.length; i += 2) {
    parts[i] = (
      <span key={i} className={className}>
        {parts[i]}
      </span>
    );
  }
  return parts;
}

export default replaceStringReact;
