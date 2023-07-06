import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Spinner from "../../components/Spinner/Spinner";
import { getItems } from "../../api/api";
import { getFormattedDate } from "../../utils/getFormattedDate";
import { Item } from "../../types/Item";

const Neo = () => {
  const [list, setList] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const date = getFormattedDate(new Date());

    getItems(date)
      .then(res => setList(res.near_earth_objects[date]))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <p>Error</p>
  }

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center gap-3">
          {list.slice(0, 6).map(({
            id,
            name,
            estimated_diameter,
            is_potentially_hazardous_asteroid,
            close_approach_data
          }) => (
            <Card
              key={id}
              className="col-lg-4 col-md-6 col-sm-12"
              style={{ background: `${is_potentially_hazardous_asteroid ? 'red' : ''}` }}
            >
              <Card.Body>
                <Card.Title>{name}</Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                  {id}
                </Card.Subtitle>

                <Card.Text>
                  Estimated diameter: {estimated_diameter.kilometers.estimated_diameter_max}
                </Card.Text>

                <Card.Text>
                  Potentially hazardous asteroid: {is_potentially_hazardous_asteroid ? 'yes' : 'no'}
                </Card.Text>

                <Card.Text>
                  Miss distance: {close_approach_data[0].miss_distance.kilometers}
                </Card.Text>

                <Card.Text>
                  Relative velocity: {close_approach_data[0].relative_velocity.kilometers_per_hour}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Neo;