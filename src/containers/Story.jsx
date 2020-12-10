import React from 'react';
import styled from 'styled-components';
import marked from 'marked';
import { colors } from '../constants';

const Container = styled.div`
  width: 100%;
`;

const Breadcrumbs = styled.div`
  font-size: 14px;
  color: ${colors.textLight};
`;

const TitleRow = styled.div`
  display: flex;
  padding: 12px 0px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${colors.textPrimary};
  margin-right: 8px;
`;

const CreatedAt = styled.div`
  font-size: 14px;
  color: ${colors.textSecondary};
`;

const ActionRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ActionButton = styled.div`
  background-color: ${colors.lightGray};
  color: ${colors.textSecondary};
  padding: 8px 13px;
  font-size: 14px;
  margin: 0px 2px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: ${colors.buttonHighlighted};
    color: white;
  }
`;

const Body = styled.div`
  color: ${colors.textPrimary};
  font-size: 14px;
  margin-top: 20px;
  border: 1px solid #DFE1E6;
  border-radius: 5px;
  padding: 15px 20px;
  overflow: auto;
  line-height: 1.5;
`;

const Story = () => {
  const [body, setBody] = React.useState('');

  React.useEffect(() => {
    const htmlBody = marked(`
# Marked

[![npm](https://badgen.net/npm/v/marked)](https://www.npmjs.com/package/marked)
[![gzip size](https://badgen.net/badgesize/gzip/https://cdn.jsdelivr.net/npm/marked/marked.min.js)](https://cdn.jsdelivr.net/npm/marked/marked.min.js)
[![install size](https://badgen.net/packagephobia/install/marked)](https://packagephobia.now.sh/result?p=marked)
[![downloads](https://badgen.net/npm/dt/marked)](https://www.npmjs.com/package/marked)
[![github actions](https://github.com/markedjs/marked/workflows/Tests/badge.svg)](https://github.com/markedjs/marked/actions)
[![snyk](https://snyk.io/test/npm/marked/badge.svg)](https://snyk.io/test/npm/marked)

- ⚡ built for speed
- ⬇️ low-level compiler for parsing markdown without caching or blocking for long periods of time
- ⚖️ light-weight while implementing all markdown features from the supported flavors & specifications
- 🌐 works in a browser, on a server, or from a command line interface (CLI)

## Demo

Checkout the [demo page](https://marked.js.org/demo/) to see marked in action ⛹️

## Docs

Our [documentation pages](https://marked.js.org) are also rendered using marked 💯

Also read about:

* [Options](https://marked.js.org/#/USING_ADVANCED.md)
* [Extensibility](https://marked.js.org/#/USING_PRO.md)

## Installation

**CLI:** \`npm install -g marked\`

**In-browser:** \`npm install marked\`

## Usage

### Warning: 🚨 Marked does not [sanitize](https://marked.js.org/#/USING_ADVANCED.md#options) the output HTML. Please use a sanitize library, like [DOMPurify](https://github.com/cure53/DOMPurify) (recommended), [sanitize-html](https://github.com/apostrophecms/sanitize-html) or [insane](https://github.com/bevacqua/insane) on the output HTML! 🚨

## License

Copyright (c) 2011-2018, Christopher Jeffrey. (MIT License)`);
    setBody(htmlBody);
  }, [setBody]);

  return (
    <Container>
      <Breadcrumbs>
        Ji-Hyo Kim / Notebook / Stories
      </Breadcrumbs>
      <TitleRow>
        <Title>Notebook</Title>
      </TitleRow>
      <CreatedAt>Created at December 6th, 2020</CreatedAt>
      <ActionRow>
        <ActionButton>
          View
        </ActionButton>
        <ActionButton>
          Edit
        </ActionButton>
        <ActionButton>
          Delete
        </ActionButton>
      </ActionRow>
      <Body dangerouslySetInnerHTML={{ __html: body }} />
    </Container>
  );
};

export default Story;
