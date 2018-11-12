import assert from 'assert';
import sinon from 'sinon';
import proxyquire from 'proxyquire';
import '../../../../server/handlers/customer/get-all-customers';

const handler = proxyquire.noCallThru()(
    '../../../../server/handlers/customer/get-all-customers', {}).default;

describe('get all customers handler', () => {
    it('should return hello world', () => {
        const request = {};

        assert.equal(handler(request, reply), 'Hello World');
    });
});
