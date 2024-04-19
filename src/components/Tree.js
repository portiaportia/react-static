import "./Tree.css";

function Tree(tree) {
  return (
    <section className="tree columns">
      <section>
        <img src={tree.image} alt={tree.name} />
      </section>
      <section>
        <h3>{tree.name}</h3>
        <p>{tree.description}</p>
      </section>
    </section>
  );
}

export default Tree;
