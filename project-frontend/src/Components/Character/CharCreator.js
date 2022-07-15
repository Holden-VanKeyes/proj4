import React from "react";

function CharCreator({ currentUser }) {
  const [newVoyager, setNewVoyager] = useState("");
  const [selection, setSelection] = useState(false);
  const [showAllClasses, setShowAllClasses] = useState([]);
  const [chosenClass, setChosenClass] = useState({});

  useEffect(() => {
    fetch("/orders")
      .then((response) => response.json())
      .then((classes) => setShowAllClasses(classes));
  }, []);

  function handleCharSelect(choice) {
    setSelection(true);
    setNewVoyager(choice);
  }

  if (selection)
    return (
      <CharSelection
        chosenClass={chosenClass}
        currentUser={currentUser}
        newVoyager={newVoyager}
      />
    );
  else
    return (
      <>
        <div id="charcreatorhead">
          <h2 id="h2">Create New Character</h2>
        </div>
        <Row xs={1} md={4} className="g-4">
          {showAllClasses.map((oneClass) => (
            <Col key={oneClass.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={oneClass.image_url} />
                <Card.Body>
                  <Card.Title>{oneClass.name}</Card.Title>
                  <Card.Text>{oneClass.description}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      setChosenClass(oneClass);
                      handleCharSelect(oneClass.id);
                    }}
                  >
                    Select Class
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
}
export default CharCreator;
