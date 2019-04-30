# Templates

Templates for Vsual Resume, Reusable components on NPM

### Requirements

```
All these templates use bootstrap make sure to add their CDN to your index.html file.

 <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">



  <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
```

### SideBar

##### 1. You need to import the component like this:

```
Import {SideBar} from 'vs-template1'
```

##### 2. SideBar component receives two kind of props:

- name: Takes a string as the title of the SideBar Dropdown.

```
    <SiderBar name={'Menu'} />
```

- navLinks: Takes an array of objects with two keys:
  - pathName: Name of your link.
  - pathRef: Path of your Route.

```
 let myLinks: [
    {
      pathName: "FirstLink",
      pathRef: "/first"
    },
    {
      pathName: "SecondLink",
      pathRef: "/second"
    },
    {
      pathName: "ThirdLink",
      pathRef: "/third"
    }
  ]
    <SiderBar navLinks={myLinks}  />
```

### About

##### 1. You need to import the component like this:

```
Import {About} from 'vs-template1'
```

##### 2. About component receives three props:

- name: String representing your name.

```
    <About name={'Celestino Salim'} />
```

- imageURL: Takes a String that will be the image URL.

```
    <About imageURL='http://myimageURL'  />
```

- description: Takes a String that will be the description displayed in the component.

```
    <About description=`Lorem Ipsum`  />
```

### Intro

##### 1. You need to import the component like this:

```
Import {Intro} from 'vs-template1'
```

##### 2. Intro component receives three props:

- name: String representing your name.

```
    <Intro name={'Celestino Salim'} />
```

- profession: Takes a String that will be displayed under your name.

```
    <Intro profession='Software Engineer'  />
```

- link: Takes a String that correspond to the route of your homepage.

```
    <Intro link=`home`  />
```
