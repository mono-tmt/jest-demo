import { StaticRouter } from "react-router-dom";
import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Pet from "../Pet.js";

test("displays a default thumbnail", async () => {
  const pet = render(
    <StaticRouter>
      <Pet />
    </StaticRouter>
  );
  const petThumbnail = await pet.findByTestId("thumbnail");
  expect(petThumbnail.src).toContain("none.jpg");
});
