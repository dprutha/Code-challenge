/**
 * Created by Prutha on 1/10/2017.
 */

var express = require('express');
var Promise = require('bluebird');
var request = require('request-promise');
var csv = require('fast-csv');

function getItems(req, res){

    var query = req.params.searchQuery;
    var csvData = [];
    // Parse csv
    csv.fromPath('./data.csv')
        .on("data", function(data){
            csvData.push(data);
            console.log(data);
        })
        .on("end", function(){
            console.log("done");
        });

    var itemIds = [];
    for(var items in csvData)
    {
        var url = 'http://api.walmartlabs.com/v1/items/'+ items +'?format=json&apiKey=kjybrqfdgp3u4yv2qzcnjndj';
        request(url).then(function (data) {
            console.log(data);
            var description = data.shortDescription;
            if(description.indexOf(query) > -1)
            {
                itemIds.push(items);
            }

            console.log(itemIds.toString());

        }).catch(function (err) {
            console.error(err);
        });
    }


}

module.exports.getItems = getItems;
