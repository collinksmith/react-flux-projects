jest.dontMock('../src/components/checkout.js');

var React = require('react/addons'),
    Checkout = require('../src/components/checkout.js'),
    TestUtils = React.addons.TestUtils;

describe('Checkout', function() {

  var CheckoutElement = TestUtils.renderIntoDocument(
    <Checkout items={[{ title: 'test' }, { title: 'test' }]} />
  )

  var items = TestUtils.scryRenderedDOMComponentsWithTag(CheckoutElement, 'li');
  var count = TestUtils.findRenderedDOMComponentWithTag(CheckoutElement, 'span');

  it('renders each item as a li', function() {
    expect(items.length).toEqual(2);
  });

  it('displays the items counts', function() {
    expect(count.getDOMNode().textContent).toEqual('2');
  });
});
