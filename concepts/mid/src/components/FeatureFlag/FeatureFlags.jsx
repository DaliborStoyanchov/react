import TikTakToe from "../TikTakToe/TikTakToe";
import GitHubProfileFinder from "../GitHubProfileFinder/GitHubProfileFinder";
import { useContext } from "react";
import { FeatureFlagsContext } from "./context/FeatureFlagContext";

const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  function checkEnabledFlags(currenKey) {
    console.log(currenKey);
    return enabledFlags[currenKey];
  }

  if (loading) return <h1>Loading...</h1>;

  const componentsToRender = [
    {
      key: "showTikTacToeBoard",
      component: <TikTakToe />,
    },
    {
      key: "showGitHubProfileFinder",
      component: <GitHubProfileFinder />,
    },
  ];

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((item) =>
        checkEnabledFlags(item.key) ? item.component : null
      )}
    </div>
  );
};

export default FeatureFlags;
