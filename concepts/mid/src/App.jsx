// import LoadMore from "./components/LoadMore/LoadMore";
// import ModalTest from "./components/Modal/ModalTest";
// import GitHubProfileFinder from "./components/GitHubProfileFinder/GitHubProfileFinder";
// import SearchAutocompleteAPI from "./components/SearchAutocompleteAPI/SearchAutocompleteAPI";
// import TikTakToe from "./components/TikTakToe/TikTakToe";

import FeatureFlagGlobalState from "./components/FeatureFlag/context/FeatureFlagContext";
import FeatureFlags from "./components/FeatureFlag/FeatureFlags";

function App() {
  return (
    <>
      {/* <LoadMore /> */}
      {/* <ModalTest /> */}
      {/* <GitHubProfileFinder /> */}
      {/* <SearchAutocompleteAPI /> */}
      {/* <TikTakToe /> */}
      <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </>
  );
}

export default App;
