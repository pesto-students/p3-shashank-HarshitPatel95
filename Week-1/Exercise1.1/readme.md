# Exercise1.1

## _When a user enters an URL in the browser, how does the browser fetch the desired result ?_

# URLs

URL stands for Uniform Resource Locator. It is an address of website which we want to access. URL indicating resource on the internet like image, text, hypertext pages, audio files, video files etc.

URLs contain protocol, domain name, path name
URL Example : https://www.pesto.tech/become-a-developer

- Protocol :- https://
- Domain :- www.pesto.tech
- Path :- become-a-developer

> When a user enter an URL in web browser’s address bar, the browser looks up the IP address for the domain name using DNS (Domain Name System). Browser initiates a connection with the server using Transfer Control Protocol. Browser sends an HTTP request to the web server. Server handles request and sends back response to the browser. Browser render the HTML and other resource to the users. Once page loaded, browser sends further requests which is initiate by users.

[![how does the browser fetch the desired result - img/ss1.png](https://i.im.ge/2022/06/24/ulvmRy.png)](https://im.ge/i/ulvmRy)

# High Level Components of a browser

1. The user interface
2. The browser engine
3. The rendering engine
4. Networking
5. UI backend
6. JavaScript interpreter
7. Data storage

[![High Level Components of a browser - img/ss2.png ](https://i.im.ge/2022/06/24/ulvbWM.png)](https://im.ge/i/ulvbWM)

## The rendering engine:

After request a particular resource from user, the render engine start fetching content of the requested resource. Render engine start receiving the content of that specific document in chunks from networking layer. After receiving content flow the rendering begins as mention below,

[![The rendering engine - img/ss3.png](https://i.im.ge/2022/06/24/ulvgTY.jpg)](https://im.ge/i/ulvgTY)

## Parsing

We have a HTML content initially which goes through tokenisation process where code split into several tokens for parsing. Using token HTML parser understand the which tag and what is inside the tag.

## Layout

In Layout, elements are marked on screen. It is contain position of element, properties related to the position.

### Paint

Paint takes properties like color, background-color, border-color, box-shadow, etc. to paint the screen with colors.

# What is DNS?

DNS stands for Domain Name System.
DNS is work as phonebook of website. It is pair of domain and IP address.
Each device connected to the Internet has a unique IP address. Other device used to access that device with the IP address. but for human it is hard to memorize IP addresses. therefore, DNS servers is used.

## How does DNS work?

The process of DNS resolution involves converting a hostname into a computer-friendly IP address. we can find and access that server using IP addess.

[![How does DNS work - img/ss4.png](https://i.im.ge/2022/06/24/ulJlWJ.png)](https://im.ge/i/ulJlWJ)

1. A user types example.com into a web browser. It received by a DNS resolver.
2. The resolver then queries a DNS root nameserver.
3. The root server responds to the resolver with the address of a TLD-Top Level Domain DNS server, which stores the information for its domains.
   -- When searching for example.com, our request is pointed toward the .com TLD.
4. The resolver then makes a request to the .com TLD.
5. The TLD server then responds with the IP address of the domain’s nameserver.
6. The recursive resolver sends a query to the domain’s nameserver.
7. The IP address for example.com is then returned to the resolver from the nameserver.
8. The DNS resolver then responds to the web browser with the IP address of the domain requested initially.

## DNS cache

DNS server is used to resolve a particular domain to IP equivalent. this process takes time since once a new website request is made, the client must ask the resolver, which asks the root server, which asks the TLD server, for information.
For reducing time there is a mechanism called DNS cache.
DNS cache refers to the temporary storage of information about previous DNS lookups on a machine's OS or web browser. Keeping a local copy of a DNS lookup allows your OS or browser to quickly retrieve it and thus a website's URL can be resolved to its corresponding IP much more efficiently.

## CDN

A content delivery network refers to a group of servers which work together to provide fast delivery of Internet content like HTML pages, javascript files, stylesheets, images, and videos.
