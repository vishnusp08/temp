type SomeType = {
  children: React.ReactNode;
};
// in typescript it is always need to specify the type of something that is being used. Here the children is a prop passed from the component Section_headers used in different parts of the project. This children prop is of the type React.ReactNode as it represents nothing but something react can
// render hence called react node
export default function Section_headers({ children }: SomeType) {
  return (
    <h1 className="mb-10 text-3xl font-semibold text-center">{children}</h1>
  );
}
