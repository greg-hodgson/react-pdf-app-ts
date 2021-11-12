interface IDocWrapper {
  children: React.ReactNode;
}

function DocWrapper({ children }: IDocWrapper) {
  return <div className="Doc-wrapper">{children}</div>;
}

export default DocWrapper;
