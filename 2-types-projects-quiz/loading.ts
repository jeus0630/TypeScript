{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (obj: ResourceLoadState) => {

      switch (obj.state){
          case 'loading':
              console.log(obj.state);
              break;
          case 'success':
              console.log(obj.response.body);
              break;
          case 'fail':
              console.log(obj.reason);
              break;
          default:
              throw new Error('not defined');
      }
  }
  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
