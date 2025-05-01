const dummyApiResponse = {
  showTikTacToeBoard: true,
  showGitHubProfileFinder: false,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject(`Some error occurred. Please try again later`);
  });
}

export default featureFlagsDataServiceCall;
