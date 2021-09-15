import { sendNotification } from './api-util-notifications';

describe('apiUtilNotifications', () => {
  it('should work', () => {
    expect(sendNotification("test")).toEqual('api-util-notifications');
  });
});
