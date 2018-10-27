// Create layout component
class Layout extends React.Component {
  flipCard(event) {
    event.currentTarget.classList.toggle('flipped');
  }

  render() {
    return (
      <LayoutWrapper>
        <GridContainer>
          <GridRow>
            <GridColumn sm="6" lg="4">
              <Card onClick={this.flipCard.bind(this)}>
                <CardFront>
                  <CardNumber>1.</CardNumber>

                  <CardTitle>Card</CardTitle>
                </CardFront>

                <CardBack>
                  <CardDescription>
                    Rand's stated goal for writing the novel was "to show how
                    desperately the world needs prime movers and how viciously
                    it treats them" and to portray "what happens to the world
                    without them".
                  </CardDescription>
                </CardBack>
              </Card>
            </GridColumn>

            <GridColumn sm="6" lg="4">
              <Card onClick={this.flipCard.bind(this)}>
                <CardFront>
                  <CardNumber>2.</CardNumber>

                  <CardTitle>Card</CardTitle>
                </CardFront>

                <CardBack>
                  <CardDescription>
                    The core idea for the book came to her after a 1943
                    telephone conversation with a friend, who asserted that Rand
                    owed it to her readers to write fiction about her
                    philosophy.
                  </CardDescription>
                </CardBack>
              </Card>
            </GridColumn>

            <GridColumn sm="6" lg="4">
              <Card onClick={this.flipCard.bind(this)}>
                <CardFront>
                  <CardNumber>3.</CardNumber>

                  <CardTitle>Card</CardTitle>
                </CardFront>

                <CardBack>
                  <CardDescription>
                    To produce Atlas Shrugged, Rand conducted research on the
                    American railroad industry. Her previous work on a proposed
                    (but never realized) screenplay.
                  </CardDescription>
                </CardBack>
              </Card>
            </GridColumn>

            <GridColumn sm="6" lg="4">
              <Card onClick={this.flipCard.bind(this)}>
                <CardFront>
                  <CardNumber>4.</CardNumber>

                  <CardTitle>Card</CardTitle>
                </CardFront>

                <CardBack>
                  <CardDescription>
                    Atlas Shrugged is set in a dystopian United States at an
                    unspecified time, in which the country has a "National
                    Legislature" instead of Congress and a "Head of State"
                    instead of a President.
                  </CardDescription>
                </CardBack>
              </Card>
            </GridColumn>
          </GridRow>
        </GridContainer>
      </LayoutWrapper>
    );
  }
}

// Render Layout React element into the DOM
ReactDOM.render(<Layout />, container);
