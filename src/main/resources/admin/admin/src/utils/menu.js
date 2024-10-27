const menu = {
    list() {
        return [
    {
        "backMenu":[
		
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"保养类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryBaoyangdengji"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"车辆类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryCheliang"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"事故类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryShigudengji"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"维修类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryWeixiudengji"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"违章类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryWeizhangdengji"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"准驾车型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZhunjia"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"员工管理",
                        "menuJump":"列表",
                        "tableName":"yuangong"
                    }
                ],
                "menu":"员工管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"车辆管理",
                        "menuJump":"列表",
                        "tableName":"cheliang"
                    }
                ],
                "menu":"车辆管理"
            }
			,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"保养登记管理",
                        "menuJump":"列表",
                        "tableName":"baoyangdengji"
                    }
                ],
                "menu":"保养登记管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"事故登记管理",
                        "menuJump":"列表",
                        "tableName":"shigudengji"
                    }
                ],
                "menu":"事故登记管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"维修登记管理",
                        "menuJump":"列表",
                        "tableName":"weixiudengji"
                    }
                ],
                "menu":"维修登记管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"违章登记管理",
                        "menuJump":"列表",
                        "tableName":"weizhangdengji"
                    }
                ],
                "menu":"违章登记管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
			{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"车辆管理",
                        "menuJump":"列表",
                        "tableName":"cheliang"
                    }
                ],
                "menu":"车辆管理"
            }
			,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"保养登记管理",
                        "menuJump":"列表",
                        "tableName":"baoyangdengji"
                    }
                ],
                "menu":"保养登记管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"事故登记管理",
                        "menuJump":"列表",
                        "tableName":"shigudengji"
                    }
                ],
                "menu":"事故登记管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"维修登记管理",
                        "menuJump":"列表",
                        "tableName":"weixiudengji"
                    }
                ],
                "menu":"维修登记管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"违章登记管理",
                        "menuJump":"列表",
                        "tableName":"weizhangdengji"
                    }
                ],
                "menu":"违章登记管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"员工",
        "tableName":"yuangong"
    }
]
    }
}
export default menu;
