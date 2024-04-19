import Tree from "../components/Tree";

function Home() {
  return (
    <div>
      <header>
        <h1>My Favorite Trees</h1>
      </header>
      <Tree
        name="Live Oak"
        description="Doesn't lose it's leaves in the winter, so it looks alive"
        image="images/live-oak.jpg"
      />
      <Tree
        name="Christmas Tree"
        description="So fun to put presents under"
        image="images/christmas-tree.jpg"
      />
      <Tree
        name="Dogwood"
        description="Pretty flowers in spring"
        image="images/dogwood.webp"
      />
    </div>
  );
}

export default Home;
