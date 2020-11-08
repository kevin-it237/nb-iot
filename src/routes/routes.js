export const mainRoot = {
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'nbiot.home',
              options: {
                topBar: {
                  visible: false,
                  drawBehind: true,
                  animate: false
                }
              }
            }
          }
        ]
      }
    }
};
  
export const loginRoot = {
    root: {
      component: {
        name: 'nbiot.login'
      }
    }
}; 