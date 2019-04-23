# Templates

Templates for Vsual Resume, Reusable components on NPM

### Requirements

```
All these templates use bootstrap
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
