import "./warning.css";

export function Warning(): JSX.Element {
  return (
    <div className="warning">
      <p>
        Atenção! Por ser acadêmico, este projeto utiliza LocalStorage, e não
        possui implementação de banco de dados ou autenticação de usuários.
      </p>
    </div>
  );
}
