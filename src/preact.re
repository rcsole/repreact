type preactElement;
external h : 'form => 'props => 'children => preactElement = "h" [@@bs.val] [@@bs.val] [@@bs.module "preact"];
external render : preactElement => Document.element => unit = "" [@@bs.val] [@@bs.module "preact"]
