import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { registerSW } from "virtual:pwa-register";
import routes from "./routes";
import Wrapper from "./Wrapper";
import { TopBarProgressIndicator } from "./Wrapper/TopBarProgressProvider";

if ("serviceWorker" in navigator) {
  registerSW();
}
function App() {
  return (
    <Wrapper>
      <Suspense fallback={<TopBarProgressIndicator />}>
        <RouterProvider router={routes} />
      </Suspense>
    </Wrapper>
  );
}

export default App;
